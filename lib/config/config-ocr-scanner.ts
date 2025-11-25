import { ToolConfig } from '@/lib/config/tool-types';

export const ocrScannerConfig: ToolConfig = {
  meta: {
    slug: 'ocr-scanner',
    name: 'OCR Scanner',
    description: 'Scan documents, images, and photos to editable text',
    cover: { 
      url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/ocr-scanner-cover.webp',
      alt: 'A document being scanned by a digital light beam and converted into editable text, symbolizing an OCR scanner.',
    },
  },
  seo: {
    title: 'Free Online OCR Scanner | Instantly Scan Images & Docs to Text',
    description: 'Our free OCR scanner accurately converts scanned documents, images (JPG, PNG), and PDFs into editable text. Scan text online in seconds. No registration required.',
    keywords: ['ocr scanner', 'ocr scanner online', 'scan to text', 'text scanner', 'scan text to word', 'document scanner', 'image to text', 'scan to text converter'],
    ogImage: 'https://cdn.deepseekocr.io/tools/ocr-scanner/ocr-scanner-og.webp',
    creator: '@yeekal',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Free Online OCR Scanner',
        'applicationCategory': 'Utilities',
        'operatingSystem': 'Any (Web-based)',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD',
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '2180',
        },
        'featureList': [
          'Document Scanning',
          'Image to Text Conversion',
          'PDF OCR',
          'Scan to Editable Text',
          'No Registration Required',
        ],
      },
    ],
  },
  hero: {
    eyebrow: 'Your Digital Text Scanner',
    title: 'Online OCR Scanner: Instantly Scan to Text',
    tagline: 'Turn your scanned documents, photos, and PDFs into editable text you can copy, paste, and use in Word or any editor. 100% free and online.',
    features: [
      { icon: 'ScanSearch', text: 'Accurate Text Recognition' },
      { icon: 'FileCode', text: 'Supports Docs & Images' },
      { icon: 'ClipboardCopy', text: 'Copy to Word, Docs, & More' },
    ],
  },
  playground: {
    title: 'Try Your All-in-One Text Scanner',
    description: 'Upload a scanned document, screenshot, or a photo with text to begin the conversion.',
    guide:{
        title: "How It Works",
        description: "Upload any image or single-page PDF. Our AI-powered scanner will read the document and provide you with clean, editable text in just a few seconds."
    },
    exampleImages: [
      { url: "https://cdn.deepseekocr.io/home/general_formula_recognition_001.webp",
        alt: 'documents with complex layouts', 
        tip: 'Complex Document' },
              {
    url: "https://cdn.deepseekocr.io/home/sample-grocery-receipt.webp", // 去掉空格
    tip: "Grocery Invoice", // Fold Receipt
    alt: "Works well even with crumpled or folded invoices."
  },
      { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/scan-book.webp', 
        alt: 'photo of a book page taken by a smartphone', 
        tip: 'Book Page' },
    ],
  },
  how_to: {
    title: 'How to Scan Text to Word (or any Editor)',
    description: 'Our intuitive tool makes it effortless to get editable text from any scanned image.',
    steps: [
      {
        icon: 'UploadCloud',
        title: '1. Upload Your Scanned File',
        description: 'You don\'t need a physical scanner. Just upload a photo or a PDF of your document into the tool.',
        media: {
           type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step1.gif',
          alt: 'A user selecting a scanned PDF document for upload.',
        },
      },
      {
        icon: 'Cpu',
        title: '2. Let the AI Scan the Text',
        description: 'Click the button and our OCR scanner will process the file, recognizing all the characters and the structure.',
        media: {
           type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step2.gif',
          alt: 'Animation of the OCR scanner processing a document and identifying text blocks.',
        },
      },
      {
        icon: 'ClipboardPaste',
        title: '3. Copy and Paste into Word',
        description: 'Your text is ready! Simply copy the text and paste it directly into Microsoft Word, Google Docs, or your email.',
        media: {
          type: 'gif',
          url: 'https://cdn.deepseekocr.io/tools/formula-ocr/formula-ocr-step3.gif',
          alt: 'Animation showing a user copying text from the tool and pasting it into a Word document.',
        },
      },
    ],
  },
  useCases: {
    title: 'From Paper to Productivity: Real-World Scanning',
    description: 'See how our online text scanner helps people digitize information and streamline their workflows.',
    scenarios: [
      {
        id: 'office',
        shortTitle: 'Office Documents',
        originalTitle: 'Digitizing Physical Archives and Memos',
        tagline: 'Make your company\'s paper trail searchable and accessible.',
        description: 'An administrator needs to digitize old client files. They take clear photos of each document, use the OCR scanner to extract the text, and create a searchable digital archive, saving hours of manual retyping.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-office-docu.webp', alt: 'An office worker scanning a stack of physical documents into a digital archive.' },
      },
      {
        id: 'student',
        shortTitle: 'Student Research',
        originalTitle: 'Scanning Library Books and Handouts',
        tagline: 'Quickly grab quotes and references without tedious typing.',
        description: 'A student in a library can\'t check out a reference book. They snap photos of relevant pages, use the text scanner to get the content, and easily copy-paste quotes and citations into their research paper.',
        image: { url: "https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-research.webp", alt: 'A student taking a photo of a library book page with their phone to scan the text.' },
      },
      {
        id: 'data-entry',
        shortTitle: 'Data Entry',
        originalTitle: 'Extracting Information from Printed Lists',
        tagline: 'Convert printed directories, invoices, or lists into usable data.',
        description: 'A data entry clerk has a printed list of contacts. They scan the document, and the tool extracts the names and numbers, which can then be easily formatted and imported into a database or CRM, drastically reducing manual entry.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-data-entry.webp', alt: 'A data entry specialist scanning a printed list to import it into a computer spreadsheet.' },
      },
      {
        id: 'legal',
        shortTitle: 'Legal Contracts',
        originalTitle: 'Making Physical Contracts Searchable',
        tagline: 'Find key clauses and terms in scanned legal documents in seconds.',
        description: 'A paralegal receives a physical copy of a signed contract. They use the OCR scanner to create a digital text version, allowing them to use Ctrl+F (Find) to instantly locate specific terms and clauses for review.',
        image: { url: 'https://cdn.deepseekocr.io/tools/ocr-scanner/use-cases-legal-contracts.webp', alt: 'A lawyer reviewing a physical contract while using an online OCR scanner on their laptop.' },
      },
    ],
  },
  features: {
    title: 'A Smarter, Faster Online Scanner',
    description: 'We designed our text scanner to be the easiest and most reliable way to digitize your documents.',
    items: [
      {
        icon: 'Scan',
        title: 'High-Fidelity Scanning',
        description: 'Our AI-powered engine delivers high accuracy for clear, typed text from scans and photos, minimizing the errors and corrections you need to make.',
      },
      {
        icon: 'Files',
        title: 'Scan Anything: PDFs, JPGs, PNGs',
        description: 'Whether you have a scanned PDF, a photo of a document, or a screenshot, our versatile tool can handle it and extract the text within.',
      },
      {
        icon: 'FileText',
        title: 'Editable Output for Word & Docs',
        description: 'We make it simple. After scanning, you get clean text that you can directly copy and paste into Microsoft Word, Google Docs, or any other word processor.',
      },
      {
        icon: 'BadgeDollarSign',
        title: 'Truly Free Online Scanner',
        description: 'This is not a trial. Our text scanner is free to use without hidden fees, watermarks, or aggressive upselling. No account or credit card needed.',
      },
      {
        icon: 'LayoutTemplate',
        title: 'Layout Recognition',
        description: 'Our scanner is smart enough to recognize paragraphs, lists, and general document structure, so you get organized text, not an unstructured wall of words.',
      },
      {
        icon: 'Shield',
        title: 'Privacy Guaranteed',
        description: 'Your documents are your own. All files uploaded to our OCR scanner are processed securely and automatically deleted from our servers after a short time.',
      },
    ],
  },
  faq: {
    title: 'Your OCR Scanner Questions',
    items: [
      {
        question: 'What is an OCR scanner?',
        answer: 'An OCR (Optical Character Recognition) scanner is a tool that "reads" the text in an image or a scanned document and converts it into editable, digital text that you can copy, paste, and search.',
      },
      {
        question: 'How do I scan text to Word?',
        answer: 'It\'s a simple two-step process: 1. Use our tool to scan your document and extract the text. 2. Click the "Copy" button and then paste the text directly into your Microsoft Word document.',
      },
      {
        question: 'Do I need an actual physical scanner to use this?',
        answer: 'No! A clear photo of your document taken with your smartphone is all you need. Just upload the photo, and our tool will act as your online text scanner.',
      },
      {
        question: 'Is this online text scanner free to use?',
        answer: 'Yes, our online OCR scanner is completely free. We support the service through on-page ads. We will offer premium plans for businesses with high-volume needs in the future.',
      },
      {
        question: 'What file types can I upload to scan?',
        answer: 'You can upload most common image formats (JPG, PNG, WEBP) and single-page PDF files that contain scanned images.',
      },
      {
        question: 'How accurate is the scan-to-text conversion?',
        answer: 'For clear documents with standard fonts, the accuracy is extremely high. The quality of the output depends on the quality of your input file—clear, flat, well-lit documents work best.',
      },
      {
        question: 'Are my scanned documents kept private?',
        answer: 'Yes. We prioritize your privacy. Your files are automatically deleted from our servers shortly after the OCR process is complete. We do not view or store your documents.',
      },
      {
        question: 'Do I need to create an account to scan my documents?',
        answer: 'No. Our tool is designed for speed and convenience. You can scan your documents to text instantly without any need for registration.',
      },
    ],
  },
  cta: {
    title: 'Ready to Ditch Manual Typing?',
    description: 'Scan any document or image to text in seconds. Get started with our free online scanner and turn your paper into editable data now.',
    button: {
      text: 'Scan to Text Now - It\'s Free'
    },
  },
};