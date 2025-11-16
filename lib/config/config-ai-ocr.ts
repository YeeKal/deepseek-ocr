import { ToolConfig } from '@/lib/config/tool-types';

export const aiOcrConfig: ToolConfig = {
  meta: {
    slug: 'ai-ocr',
    name: 'AI OCR',
    description: 'AI poweres text extraction from any image or PDF',
    cover: {
      url: 'https://cdn.deepseekocr.io/tools/ai-ocr/ai-ocr-cover.webp',
      alt: 'Abstract image showing an AI network processing a document and extracting text.',
    },
  },
  seo: {
    title: 'Free AI OCR Online - Accurate & Layout-Aware | DeepSeekOCR.io',
    description: 'Experience next-generation AI OCR. Instantly convert images and PDFs to text or structured Markdown while preserving the original layout. 100% free, no sign-up needed.',
    keywords: ['AI OCR', 'Online OCR', 'Free OCR', 'DeepSeek OCR', 'Layout-Aware OCR', 'Intelligent Document Processing', 'Image to Text AI', 'PDF to Text'],
    ogImage: 'https://cdn.deepseekocr.io/tools/ai-ocr/ai-ocr-og.webp',
    creator: '@yeekal',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'AI OCR Tool',
        'applicationCategory': 'Productivity',
        'operatingSystem': 'Web',
        'description': 'A free online AI-powered OCR tool that extracts text from images and PDFs with high accuracy, preserving the original document layout and structure.',
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
            'reviewCount': '512'
        }
      },
    ],
  },
  hero: {
    eyebrow: 'Next-Generation OCR',
    title: 'Intelligent AI OCR: Beyond Just Text Extraction',
    tagline: 'Our AI-powered OCR doesn\'t just read text—it understands structure. Extract text, tables, and layouts with unparalleled accuracy. Free forever, no sign-up required.',
    features: [
      { icon: 'Sparkles', text: 'State-of-the-Art Accuracy' },
      { icon: 'FileText', text: 'Layout-Preserving Engine' },
      { icon: 'Languages', text: '100+ Languages Supported' },
    ],
  },
  playground: {
    title: 'Try Our AI OCR Instantly',
    description: 'Drag and drop an image or PDF to see our AI in action. Experience the difference in accuracy and formatting.',
    guide: {
        title: "How It Works",
        description: "Simply upload your file. Our AI, powered by a blend of DeepSeek and PaddleOCR models, will analyze the document's structure and text, delivering a clean, editable output in seconds."
    },
    exampleImages: [
            { url: 'https://cdn.deepseekocr.io/home/sample-grocery-receipt.webp', 
        alt: 'Works well even with crumpled or folded invoices',
      tip: 'Folded Grocery Invoice' },
      { 
        url: 'https://cdn.deepseekocr.io/home/general_formula_recognition_001.webp', 
        alt: 'Complex Document with Mixed Content for OCR',
        tip: 'Complex Document' 
      },
      { 
        url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-handwritten.webp', 
        alt: 'Example of a handwritten equation for OCR',
       tip: 'Handwritten Mathematical Expressions' 
      }
      ],
  },

  how_to: {
    title: 'How to Extract Text from Images in 3 Simple Steps',
    description: 'Our intuitive interface makes converting your images and documents to editable text effortless.',
    steps: [
      {
        icon: 'UploadIcon',
        title: '1. Upload Your Image or Document',
        description: 'Drag & drop, paste, or select your file (JPG, PNG, PDF). Use photos, scanned documents, or screenshots.',
        media: {
         type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step1.gif',
          alt: 'Click choose file and select the image you want to extract text from.'
        }
      },
      {
        icon: 'Cpu',
        title: '2. Initiate AI Text Recognition',
        description: 'Click "Extract Text" and our AI will instantly analyze and process your document, preserving the original formatting.',
        media: {
          type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step2.gif',
          alt: 'Animation showing the AI processing the image and extracting text.'
        }
      },
      {
        icon: 'ClipboardCopy',
        title: '3. Copy Your Extracted Text',
        description: 'Your text is ready. Copy it to your clipboard or download as a file. Use it in documents, notes, or any application.',
        media: {
          type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step3.gif',
          alt: 'Animation showing a user copying the extracted text to clipboard.'
        }
      }
    ]
  },

  useCases: {
    title: 'From Clutter to Clarity: Real-World AI OCR',
    description: 'Discover how deepseekocr.io transforms tedious manual data entry into an effortless, automated process across various fields.',
    scenarios: [
      {
        id: 'researcher',
        shortTitle: 'Research Notes',
        originalTitle: 'Archiving Academic Papers and Textbook Pages',
        tagline: 'Make your study materials searchable and citable.',
        description: 'A student uploads a PDF of a dense academic journal article. The tool\'s AI OCR extracts the text, preserving columns and headings, allowing them to search for keywords and easily copy-paste citations into their research paper.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ai-ocr/use-cases-research-notes.webp', 
          alt: 'Symbolic illustration of text and citations being extracted from a book by an AI OCR, representing academic research digitization' },
      },
      {
        id: 'finance',
        shortTitle: 'Invoice Processing',
        originalTitle: 'Automating Expense Reporting from Invoices',
        tagline: 'Extract key data from invoices and receipts in seconds.',
        description: 'An accountant receives a batch of scanned invoices as PDFs. Instead of manually typing line items, they use the AI OCR to extract tables of data, which can then be easily copied into Excel or Google Sheets, drastically reducing manual entry errors.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ai-ocr/use-cases-invoice-processing.webp', 
          alt: 'Abstract illustration of an AI OCR extracting table data from a financial invoice and converting it into a spreadsheet format for automated data entry' },
      },
       {
        id: 'notes',
        shortTitle: 'Meeting Notes',
        originalTitle: 'Digitizing Whiteboard Brainstorms & Handwritten Notes',
        tagline: 'Ensure no idea is lost, from ink to action item.',
        description: 'After a productive brainstorming session, a project manager snaps a photo of a whiteboard covered in handwritten notes. The AI OCR digitizes the scribbles into editable text, creating an instant meeting summary that can be shared, searched, and converted into actionable tasks.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ai-ocr/use-cases-handwriting-notes.webp', 
          alt: `Symbolic illustration of a pen's handwritten ink trail seamlessly transforming into clean, editable digital text, representing handwriting OCR` },
      },
      {
        id: 'marketer',
        shortTitle: 'Content Repurposing',
        originalTitle: 'Converting Infographics into Blog Post Outlines',
        tagline: 'Unlock the text within your visual assets.',
        description: 'A marketer has a popular infographic. They use the AI OCR to extract all the text and headings, instantly creating a structured outline in Markdown for a detailed blog post, expanding their content reach without starting from scratch.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ai-ocr/use-cases-marketer.webp', 
          alt: 'Abstract illustration of an AI OCR repurposing a marketing infographic by extracting its text and headings into a structured document' },
      },
    ],
  },
  features: {
    title: 'More Than Just Words: Features That Matter',
    description: 'We built our AI OCR tool to solve the real-world frustrations of text extraction. Here’s what sets us apart.',
    items: [
      {
        icon: 'PenTool',
        title: 'Structure-Aware Markdown Output',
        description: 'Don\'t just get a wall of text. Our AI recognizes headings, lists, tables, and code blocks, exporting them into clean, structured Markdown. Perfect for developers, writers, and researchers.',
      },
      {
        icon: 'LayoutTemplate',
        title: 'Layout-Preserving Extraction',
        description: 'Upload a two-column document and get back structured text that respects the original flow. Our model understands the visual layout of your file, preserving context and readability.',
      },
      {
        icon: 'Zap',
        title: 'Blazing Fast & High Accuracy',
        description: 'Powered by a combination of DeepSeek and PaddleOCR models, we deliver state-of-the-art accuracy at incredible speeds, minimizing the need for manual corrections.',
      },
      {
        icon: 'ShieldOff',
        title: 'No Sign-Up, No Hidden Costs',
        description: 'We believe in transparent, accessible tools. Use our AI OCR for free without creating an account or hitting a surprise paywall. No watermarks, no nonsense.',
      },
       {
        icon: 'FileCheck2',
        title: 'Handles Complex Documents & Tables',
        description: 'Tired of jumbled table data? Our AI excels at accurately extracting tabular data into a structured format you can actually use, saving you hours of re-formatting.',
      },
      {
        icon: 'Languages',
        title: 'Global Language Support',
        description: 'From English and Spanish to Japanese and Russian, our tool supports over 100 languages, making it a versatile solution for global users.',
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    items: [
      {
        question: 'Is this AI OCR tool truly free?',
        answer: 'Yes, absolutely. The current version of our tool is 100% free to use. We support the service through unobtrusive ads. We will introduce a Pro plan in the future for users who need advanced features like batch processing and API access.',
      },
      {
        question: 'What happens to my uploaded files? Are they secure?',
        answer: 'Your privacy is our priority. Files are uploaded securely, processed on our servers, and then automatically deleted after a short period. We do not store or share your data.',
      },
      {
        question: 'What file formats can I upload?',
        answer: 'You can upload common image formats like PNG, JPG, and WEBP. For documents, we currently support single-page PDF files up to 5MB. Multi-page PDF support is coming soon for Pro users.',
      },
      {
        question: 'How accurate is the text extraction?',
        answer: 'Our tool uses a state-of-the-art AI model, which provides extremely high accuracy for clear, typed text. Accuracy for handwritten or very stylized text may vary but is still among the best available.',
      },
      {
        question: 'Can it really preserve the document\'s original layout?',
        answer: 'Yes, our AI is designed to be layout-aware. It identifies elements like columns, headings, and lists to provide a structured output (like Markdown) that reflects the original formatting, saving you significant re-formatting time.',
      },
      {
        question: 'Do I need to create an account to use the service?',
        answer: 'No. We want to provide the quickest and easiest experience possible. You can use the tool immediately without any registration or sign-up.',
      },
      {
        question: 'What languages are supported?',
        answer: 'Our OCR engine supports over 100 languages, including all major global languages. Simply upload your document, and our AI will automatically detect the language.',
      },
      {
        question: 'Are there any limitations on the free version?',
        answer: 'The free version is very generous but has a few limits to ensure fair usage for everyone. There is a file size limit of 5MB and PDFs are limited to one page. Users may also see ads and need to complete a CAPTCHA during peak traffic.',
      },
    ],
  },
  cta: {
    title: 'Ready to Revolutionize Your Workflow?',
    description: 'Stop wasting time on manual transcription. Experience the future of OCR today and turn your images and documents into structured, usable data in seconds.',
    button: {
      text: 'Try AI OCR Now - It\'s Free',
      link: '#playground',
    },
  },
};