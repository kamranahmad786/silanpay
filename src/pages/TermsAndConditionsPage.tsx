import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/layout/Header";

const TermsAndConditionsPage: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try direct path first, then URL-encoded fallback
    fetch("/Terms & Condition.txt")
      .then((res) => {
        if (!res.ok) throw new Error("direct path failed");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch(() => {
        fetch("/Terms%20%26%20Condition.txt")
          .then((res2) => {
            if (!res2.ok)
              throw new Error(`Failed to load terms (${res2.status})`);
            return res2.text();
          })
          .then((text2) => {
            setContent(text2);
            setLoading(false);
          })
          .catch((e: unknown) => {
            setError(
              e instanceof Error ? e.message : "Unable to load content."
            );
            setLoading(false);
          });
      });
  }, []);

  // Simple inline markdown emphasis parser for **bold**, *italic*, __bold__, _italic_
  const parseInline = (text: string): React.ReactNode[] => {
    const nodes: React.ReactNode[] = [];
    // Combined regex capturing order: bold (**text** or __text__), then italic (*text* or _text_)
    const regex = /(\*\*([^*]+)\*\*)|(__([^_]+)__)|(\*([^*]+)\*)|(_([^_]+)_)/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      const start = match.index;
      if (start > lastIndex) {
        nodes.push(text.slice(lastIndex, start));
      }
      if (match[1] || match[3]) {
        // bold
        const val = (match[2] || match[4]) ?? "";
        nodes.push(<strong key={`b-${start}`}>{val}</strong>);
      } else if (match[5] || match[7]) {
        // italic
        const val = (match[6] || match[8]) ?? "";
        nodes.push(<em key={`i-${start}`}>{val}</em>);
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      nodes.push(text.slice(lastIndex));
    }
    return nodes;
  };

  // Render the content with styled headings and lists, preserving text
  const rendered = useMemo(() => {
    if (!content) return null;

    const lines = content.split(/\r?\n/);
    const elements: React.ReactNode[] = [];
    let inUl = false;
    let inOl = false;
    let ulItems: React.ReactNode[] = [];
    let olItems: React.ReactNode[] = [];
    let paragraphBuffer: string[] = [];

    const flushLists = () => {
      if (inUl) {
        elements.push(
          <ul
            className="list-disc pl-6 space-y-1"
            key={`ul-${elements.length}`}
          >
            {ulItems}
          </ul>
        );
      }
      if (inOl) {
        elements.push(
          <ol
            className="list-decimal pl-6 space-y-1"
            key={`ol-${elements.length}`}
          >
            {olItems}
          </ol>
        );
      }
    };

    const flushParagraph = (idxKey: number) => {
      if (paragraphBuffer.length > 0) {
        const joined = paragraphBuffer.join(" ").replace(/\s+/g, " ");
        elements.push(
          <p className="text-gray-800 leading-7" key={`p-${idxKey}`}>
            {parseInline(joined)}
          </p>
        );
        paragraphBuffer = [];
      }
    };

    lines.forEach((raw, idx) => {
      const line = raw; // keep as-is for no content loss

      // Headings
      const h1 = line.match(/^#\s+(.+)/);
      const h2 = line.match(/^##\s+(.+)/);
      const h3 = line.match(/^###\s+(.+)/);
      if (h1 || h2 || h3) {
        if (inUl || inOl) {
          flushLists();
          inUl = false;
          inOl = false;
          ulItems = [];
          olItems = [];
        }
        flushParagraph(idx);
        const title = (h1 || h2 || h3)![1];
        const id = title
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-");
        if (h1) {
          elements.push(
            <h1
              id={id}
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              key={`h1-${idx}`}
            >
              {parseInline(title)}
            </h1>
          );
        } else if (h2) {
          elements.push(
            <h2
              id={id}
              className="text-2xl font-semibold mt-8 mb-3"
              key={`h2-${idx}`}
            >
              {parseInline(title)}
            </h2>
          );
        } else if (h3) {
          elements.push(
            <h3
              id={id}
              className="text-xl font-semibold mt-6 mb-2"
              key={`h3-${idx}`}
            >
              {parseInline(title)}
            </h3>
          );
        }
        return;
      }

      // Unordered list item
      if (/^\-\s+/.test(line)) {
        flushParagraph(idx);
        if (!inUl) {
          if (inOl) {
            flushLists();
            inOl = false;
            olItems = [];
          }
          inUl = true;
        }
        ulItems.push(
          <li key={`li-${idx}`}>{parseInline(line.replace(/^\-\s+/, ""))}</li>
        );
        return;
      }

      // Ordered list item
      if (/^\d+\.\s+/.test(line)) {
        flushParagraph(idx);
        if (!inOl) {
          if (inUl) {
            flushLists();
            inUl = false;
            ulItems = [];
          }
          inOl = true;
        }
        olItems.push(
          <li key={`oli-${idx}`}>
            {parseInline(line.replace(/^\d+\.\s+/, ""))}
          </li>
        );
        return;
      }

      // Blank line -> spacing or close any list/paragraph
      if (line.trim() === "") {
        if (inUl || inOl) {
          flushLists();
          inUl = false;
          inOl = false;
          ulItems = [];
          olItems = [];
        }
        flushParagraph(idx);
        elements.push(<div className="h-2" key={`sp-${idx}`} />);
        return;
      }

      // Accumulate normal text lines into paragraph buffer
      paragraphBuffer.push(line.trim());
    });

    if (inUl || inOl) flushLists();
    flushParagraph(lines.length + 1);

    return <article className="space-y-2">{elements}</article>;
  }, [content]);

  return (
    <div className="min-h-screen bg-white font-outfit text-gray-900">
      <Header />
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Last updated: October 6, 2025
            </p>
          </header>

          <div className="w-full bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            {loading && <p className="text-gray-600">Loading terms...</p>}
            {error && <p className="text-red-600">{error}</p>}
            {!loading && !error && rendered}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
