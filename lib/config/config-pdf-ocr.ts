import { ToolConfig } from '@/lib/config/tool-types';

export const pdfOcrConfig: ToolConfig = {
  meta: {
    slug: 'pdf-ocr',
    name: 'PDF OCR',
    description: 'Convert PDFs and scanned documents to text',
    cover: {
      url: 'https://cdn.deepseekocr.io/tools/pdf-ocr/pdf-ocr-cover.webp',
      alt: 'A PDF file icon smoothly transitioning into an editable text document icon, representing the PDF to text conversion.',
    },
  },
  seo: {
    title: 'Free PDF OCR: Convert PDF to Text Online | DeepSeekOCR.io',
    description: 'Accurately convert PDF to text with our free online OCR tool. Our AI-powered document OCR preserves formatting and extracts tables. No sign-up needed for single-page PDFs.',
    keywords: ['PDF OCR', 'convert pdf to text', 'document ocr', 'pdf to text', 'free pdf ocr', 'online document scanner', 'extract text from pdf', 'scanned document ocr'],
    ogImage: 'https://cdn.deepseekocr.io/tools/pdf-ocr/pdf-ocr-og.webp',
    creator: '@yeekal',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'PDF to Text Converter (OCR)',
        'applicationCategory': 'Productivity',
        'operatingSystem': 'Web',
        'description': 'A free online AI-powered document OCR tool that converts single-page PDFs and scanned documents into editable, structured text while preserving the layout.',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
        },
        'creator': {
            '@type': 'Organization',
            'name': 'DeepSeekOCR.io'
        },
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1245'
        }
      },
    ],
  },
  hero: {
    eyebrow: 'Effortless Document Digitization',
    title: 'Intelligent PDF OCR',
    tagline: 'Convert your PDFs and scanned documents into editable text or structured Markdown. Our AI preserves the original layout, including columns and tables. 100% free for single-page documents.',
    features: [
      { icon: 'FileScan', text: 'High-Fidelity Document Scanning' },
      { icon: 'LayoutTemplate', text: 'Preserves Complex Layouts' },
      { icon: 'Table', text: 'Accurate Table Extraction' },
    ],
  },
  playground: {
    title: 'Try PDF to Text Converter Instantly',
    description: 'Drag and drop a single-page PDF or a scanned document image to see it in action. Experience the layout-aware difference.',
     guide:{
        title: "How It Works",
        description: "Upload your document. Our AI engine reads the scanned text and analyzes the structure, converting it into clean, usable text or Markdown while keeping the format intact."
    },
    exampleImages: [
      { url: 'https://cdn.deepseekocr.io/tools/invoice-ocr/invoice1.webp', alt: 'An example of a business invoice in PDF format for OCR.', tip: 'Extract Invoice Data' },
      { url: 'https://cdn.deepseekocr.io/home/general_formula_recognition_001.webp', alt: 'A scanned page of a scientific research paper with multiple columns.', tip: 'Digitize Academic Papers' },
      { url: 'https://cdn.deepseekocr.io/tools/image-ocr/contract-doc.webp', alt: 'A snippet of a scanned legal document for text extraction.', tip: 'Make Contracts Searchable' },
    ],
  },

  how_to: {
    title: 'How to Extract Text from PDF in 3 Simple Steps',
    description: 'Our intuitive interface makes converting your PDF documents to editable text completely effortless.',
    steps: [
      {
        icon: 'UploadIcon',
        title: '1. Upload Your PDF Document',
        description: 'Drag & drop your PDF file or click to select. Supports scanned PDFs, digitized documents, and multi-page files.',
        media: {
           type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step1.gif',
          alt: 'Click choose file and select the PDF you want to extract text from.'
        }
      },
      {
        icon: 'Cpu',
        title: '2. AI Analyzes Each Page',
        description: 'Click "Extract Text" and our AI will process each page of your PDF, recognizing text while preserving the original layout and structure.',
        media: {
           type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step2.gif',
          alt: 'Animation showing the AI processing each page of the PDF document.'
        }
      },
      {
        icon: 'FileText',
        title: '3. Download or Copy Your Text',
        description: 'Your extracted text is ready. Download as a text file or searchable PDF, or copy directly to your clipboard for immediate use.',
        media: {
           type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step3.gif',
          alt: 'Animation showing a user downloading the extracted text from PDF.'
        }
      }
    ]
  },

   useCases: {
    title: 'From Static Documents to Dynamic Data',
    description: 'Discover how our PDF OCR tool eliminates manual data entry and unlocks information trapped in your documents.',
    scenarios: [
      {
        id: 'legal',
        shortTitle: 'Legal Documents',
        originalTitle: 'Making Scanned Contracts Searchable',
        tagline: 'Quickly find key clauses and terms in any scanned legal document.',
        description: 'A paralegal needs to review a 50-page scanned contract but only needs to find clauses related to termination. Instead of reading the whole document, they OCR a key page, making the text instantly searchable and copyable for their report.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-legal-contracts.webp', alt: 'A desk with legal documents, a gavel, and a laptop displaying the OCR tool.' },
      },
      {
        id: 'finance',
        shortTitle: 'Financial Reports',
        originalTitle: 'Extracting Data from PDF Financial Statements',
        tagline: 'Convert tables in financial reports into usable spreadsheet data.',
        description: 'An analyst receives a quarterly earnings report as a scanned PDF. They use the PDF OCR tool to extract a crucial data table, which they can then paste directly into Excel for analysis, saving over an hour of manual data entry.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-data-entry.webp', alt: 'A financial analyst extracting a table from a PDF report on one screen and pasting it into a spreadsheet on another.' },
      },
      {
        id: 'academic',
        shortTitle: 'Academic Research',
        originalTitle: 'Digitizing Historical Archives and Texts',
        tagline: 'Make primary source documents and old literature searchable.',
        description: 'A historian is working with a collection of scanned letters from the 19th century. By using the document OCR, they convert the images of the letters into digital text, allowing them to search the entire collection for specific names, dates, and places.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-research.webp', alt: 'An old, historical document being scanned and its text appearing on a computer screen.' },
      },
      {
        id: 'office',
        shortTitle: 'Office Administration',
        originalTitle: 'Archiving Memos and Internal Documents',
        tagline: 'Create a searchable digital archive of your paper-based workflow.',
        description: 'An office manager is tasked with digitizing years of printed internal memos. They scan the documents to PDF and use the OCR tool to create text-based versions, making the company\'s entire history of internal communications instantly searchable.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ai-ocr/use-cases-marketer.webp', alt: 'An office worker scanning a stack of memos into a computer.' },
      },
    ],
  },
  features: {
    title: 'Advanced Document OCR Features You\'ll Love',
    description: 'We focused on solving the most frustrating parts of document conversion to deliver a tool that just works.',
    items: [
      {
        icon: 'ScanSearch',
        title: 'High-Fidelity Scanned Document Recognition',
        description: 'Our OCR is optimized for scanned documents, effectively handling variations in lighting, page skew, and print quality to deliver the most accurate results possible.',
      },
      {
        icon: 'Columns',
        title: 'Layout-Preserving Conversion',
        description: 'Tired of OCR tools that produce a single wall of text? We recognize columns, paragraphs, and headings to maintain the original document\'s readability and structure.',
      },
      {
        icon: 'Table',
        title: 'Accurate Table Data Extraction',
        description: 'Stop re-creating tables by hand. Our AI identifies tabular structures within your PDF and extracts the data in a clean format you can copy into any spreadsheet.',
      },
      {
        icon: 'ShieldQuestion',
        title: 'Transparently Free, No Bait-and-Switch',
        description: 'Our tool is genuinely free for single-page PDFs. We don\'t ask for your credit card or surprise you with hidden limits. For multi-page PDFs, join the waitlist for our upcoming Pro plan!',
      },
       {
        icon: 'Languages',
        title: 'Global Document Support',
        description: 'From business contracts in German to historical texts in Japanese, our tool can recognize and process documents in over 100 languages with high accuracy.',
      },
      {
        icon: 'Trash2',
        title: 'Privacy-Focused Processing',
        description: 'We know your documents are sensitive. All uploaded files are processed securely and are permanently deleted from our servers after the conversion is complete.',
      },
    ],
  },
  faq: {
    title: 'PDF & Document OCR: Frequently Asked Questions',
    items: [
      {
        question: 'Can I convert a multi-page PDF document?',
        answer: 'Our current free tool is optimized for single-page PDFs or individual document images. We are working hard on a Pro version that will support batch processing and multi-page PDFs. You can sign up for the waitlist to be notified!',
      },
      {
        question: 'Is this document OCR service really free?',
        answer: 'Yes, it is 100% free for converting single-page documents. There are no hidden fees or registration requirements. The service is supported by on-page advertising.',
      },
      {
        question: 'How does it handle scanned documents with low quality?',
        answer: 'While higher quality scans will always yield better results, our AI is trained to handle common imperfections like page skew, shadows, and light handwriting. The accuracy will be higher on clearer documents.',
      },
      {
        question: 'Are my uploaded business or legal documents secure?',
        answer: 'Yes. We prioritize your privacy and security. Your files are encrypted during upload and are automatically and permanently deleted from our servers a short time after processing.',
      },
        {
        question: 'Can it accurately extract tables from a PDF?',
        answer: 'Yes, this is one of our key features. Our AI is specifically trained to identify rows and columns in a document and extract the data in a structured way that you can easily use in other applications.',
      },
      {
        question: 'What is the difference between PDF OCR and a regular PDF converter?',
        answer: 'A regular PDF converter typically only works on PDFs that were created from a text document (text-based PDFs). Our OCR tool works on scanned PDFs, where the text is "trapped" in an image layer, and digitizes it into real, editable text.',
      },
      {
        question: 'What output formats do you provide?',
        answer: 'We provide two convenient outputs: clean plain text for easy pasting anywhere, and structured Markdown, which preserves formatting like headings, bold text, lists, and tables.',
      },
      {
        question: 'Is there a file size limit for my PDF?',
        answer: 'To ensure fast and free service for all users, we currently have a file size limit of 5MB per document on our free tool.',
      },
    ],
  },
  cta: {
    title: 'Stop Retyping. Start Converting.',
    description: 'Unlock the text within your scanned documents and PDFs. Save time, reduce errors, and make your information searchable and editable today.',
    button: {
      text: 'Convert Your PDF for Free',
    },
  },
};