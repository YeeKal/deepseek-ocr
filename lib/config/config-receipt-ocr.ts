import { ToolConfig } from '@/lib/config/tool-types';

export const receiptOcrConfig: ToolConfig = {
   meta: {
    slug: 'receipt-ocr',
    name: 'Receipt OCR',
    description: 'Scan and extract key data from receipts for expense tracking.',
    cover: {
      url: '/images/covers/receipt-ocr-cover.png',
      alt: 'Cover image for the Receipt OCR tool, showing a store receipt with key data highlighted.'
    }
  },
  seo: {
    title: 'Free Receipt OCR Scanner: Extract Data to Excel & JSON',
    description: 'Automate your expense tracking. Our AI-powered Receipt OCR extracts key data like merchant, total, and date from receipts instantly. Export to JSON or copy for Excel.',
    keywords: ['receipt ocr', 'receipt scanner', 'extract data from receipt', 'receipt to excel', 'expense tracking ocr', 'invoice and receipt ocr'],
    ogImage: 'https://www.deepseekocr.io/images/og-receipt-ocr.png',
    creator: '@yeekal',
    structuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        'name': 'Free Receipt OCR Scanner',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Any (Web-based)',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        },
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '580'
        }
      }
    ]
  },

  hero: {
    eyebrow: 'Automated Expense Tracking Tool',
    title: 'Scan Receipts and Extract Data in Seconds',
    tagline: 'Turn your piles of paper receipts into structured, usable data. Our free OCR scanner accurately extracts merchant details, totals, and dates, streamlining your expense management.',
    features: [
      { icon: 'CheckCircle', text: 'Automated Data Extraction' },
      { icon: 'CheckCircle', text: 'Export-Ready for Excel/JSON' },
      { icon: 'CheckCircle', text: 'Ideal for Freelancers & SMBs' }
    ]
  },

  playground: {
    title: 'Try Our Receipt Scanner Now',
    description: 'Upload a photo of a receipt to see it in action.',
    guide:{
      title:"How to Use the Receipt OCR Tool",
      description:"Upload a clear image of your receipt (JPG or PNG). Our AI will extract key details like merchant name, date, and total amount instantly."
    },
    exampleImages: [
      { url: '/images/examples/receipt-restaurant.jpg', 
        alt: 'Example of a restaurant receipt for OCR scanning',
      tip:"restaurant receipt" },
      { url: '/images/examples/receipt-retail.jpg', alt: 'Example of a retail store receipt for data extraction',
        tip:"retail store receipt"
       },
      { url: '/images/examples/receipt-crumpled.jpg', alt: 'Example of a crumpled receipt to test OCR accuracy', 
        tip:"crumed receipt" }
    ]
  },

  how_to: {
    title: 'How to Digitize Your Receipts Instantly',
    description: 'Go from a cluttered wallet to organized digital records in three easy steps.',
    steps: [
      { 
        icon: 'Camera', 
        title: '1. Upload Your Receipt', 
        description: 'Take a clear photo of your receipt and upload the JPG or PNG file. You can also process digital receipts from screenshots.',
        media: {
            type: 'gif',
            url: '/videos/how-to/receipt-step1.gif',
            alt: 'Animation showing a user uploading a receipt image.'
        }
      },
      { 
        icon: 'Cpu', 
        title: '2. AI Extracts Key Data', 
        description: 'Our AI engine scans the receipt, identifies key fields like merchant, date, and total, and extracts the text with high accuracy.',
        media: {
            type: 'gif',
            url: '/videos/how-to/receipt-step2.gif',
            alt: 'Animation of AI processing receipt data.'
        }
      },
      { 
        icon: 'Download', 
        title: '3. Copy or Export Your Data', 
        description: 'Review the extracted data, then simply copy it to paste into your spreadsheet or use the structured output for your apps.',
        media: {
            type: 'gif',
            url: '/videos/how-to/receipt-step3.gif',
            alt: 'Animation showing user copying extracted receipt data.'
        }
      }
    ]
  },

  useCases: {
    title: 'Effortless Expense Management for Everyone',
    description: 'Whether you\'re a freelancer tracking expenses or a business managing reimbursements, our tool saves you valuable time.',
    scenarios: [
      { 
        id: 'freelancer', 
        shortTitle: 'For Freelancers', 
        originalTitle: 'Simplify Tax Time', 
        tagline: 'Keep a perfect record of your business expenses.', 
        description: 'Stop stuffing receipts in a shoebox. Snap a photo after every purchase, extract the data, and keep a running digital log in your favorite spreadsheet software. Makes tax preparation a breeze.', 
        image: { url: '/images/use-cases/freelancer-desk.jpg', alt: 'Freelancer at a desk with coffee and receipts' } 
      },
      { 
        id: 'business_owner', 
        shortTitle: 'For Business Owners', 
        originalTitle: 'Streamline Reimbursements', 
        tagline: 'Manage employee expenses without the headache.', 
        description: 'Have your team members scan their receipts for travel and supplies. Our tool provides the structured data needed to quickly process reimbursements, reducing administrative overhead.', 
        image: { url: '/images/use-cases/office-meeting.jpg', alt: 'Small business team having a meeting' } 
      },
      { 
        id: 'personal_finance', 
        shortTitle: 'For Personal Budgeting', 
        originalTitle: 'Track Your Spending', 
        tagline: 'Understand where your money is going.', 
        description: 'Want to stick to a budget? Scan your daily receipts from coffee shops, grocery stores, and more to easily categorize and track your spending habits in a personal finance app or spreadsheet.', 
        image: { url: '/images/use-cases/person-shopping.jpg', alt: 'Person looking at a receipt in a grocery store' } 
      },
      { 
        id: 'accountant', 
        shortTitle: 'For Accountants', 
        originalTitle: 'Improve Client Onboarding', 
        tagline: 'Quickly process new client financial documents.', 
        description: 'When onboarding a new client, quickly digitize their historical shoebox of receipts. Our tool helps you efficiently process large volumes of documents to get their books in order faster.', 
        image: { url: '/images/use-cases/accountant-with-client.jpg', alt: 'Accountant reviewing documents with a client' } 
      }
    ]
  },

  features: {
    title: 'More Than Just a Receipt Scanner',
    description: 'Our AI-powered tool is built to provide accurate, structured, and actionable data from any receipt.',
    items: [
      { icon: 'List', title: 'Key Field Extraction', description: 'Our model automatically identifies and extracts the most important data: Merchant Name, Transaction Date, Total Amount, Tax, and more.' },
      { icon: 'Brackets', title: 'Structured Data Output', description: 'Get your data in a clean, organized format. Perfect for developers needing JSON output or for easy copy-pasting into Excel and Google Sheets.' },
      { icon: 'Eye', title: 'High Accuracy on Tough Receipts', description: 'Our advanced OCR handles various conditions, including low-light photos, slightly crumpled paper, and thermal printer fading.' },
      { icon: 'Zap', title: 'Save Hours of Manual Entry', description: 'Slash the time you spend on data entry for expense reports and bookkeeping. What used to take hours can now be done in minutes, for free.' },
      { icon: 'ShieldCheck', title: 'Your Financial Data is Secure', description: 'We process your receipts and immediately discard them. We do not store your financial information, ensuring your complete privacy and security.' },
      { icon: 'Users', title: 'Free for Individuals & Small Teams', description: 'Our powerful receipt scanning technology is free to use, making modern expense management accessible to everyone.' }
    ]
  },
  
  faq: {
    title: "Frequently Asked Questions about Receipt OCR",
    items: [
      { question: 'What is Receipt OCR?', answer: 'Receipt OCR is a technology that uses AI to automatically scan and extract key information from paper or digital receipts. This includes data like the merchant\'s name, transaction date, line items, tax, and the total amount, converting it into structured digital data.' },
      { question: 'What specific data can this receipt scanner extract?', answer: 'Our tool specializes in extracting the most critical information for expense tracking: the merchant name, the total amount paid, the transaction date, and where available, the tax amount and subtotal.' },
      { question: 'Can I export the extracted data to Excel or Google Sheets?', answer: 'Yes. While we don\'t offer a direct "Export to XLS" button in our free tool, we provide the data in a clean, table-like format that you can easily copy and paste directly into any spreadsheet application like Excel or Google Sheets.' },
      { question: 'Does it work with long, faded, or handwritten receipts?', answer: 'Our AI performs best on clear, printed receipts. It can handle common issues like thermal paper fading and some creases. However, its accuracy on fully handwritten receipts may be limited.' },
      { question: 'Is it secure to upload my financial documents here?', answer: 'Absolutely. We take your privacy very seriously. All uploaded receipts are processed in-memory and permanently deleted immediately after the data extraction is complete. We do not store your receipts or financial data.' },
      { question: 'How does this tool help with expense reports?', answer: 'It automates the most tedious part: data entry. By instantly digitizing totals, dates, and vendors, it allows you to quickly compile the information needed for your expense reports, saving significant time and reducing errors.' },
      { question: 'Is there a limit to how many receipts I can scan for free?', answer: 'Our free tier is designed to be generous for individuals and small businesses. For very high-volume batch processing, we plan to offer dedicated Pro and API plans in the future.' },
      { question: 'Do you offer a receipt OCR API for developers?', answer: 'A dedicated Receipt OCR API is on our roadmap. It will allow developers to integrate our powerful scanning technology directly into their expense management, accounting, or fintech applications.' }
    ]
  },

  cta: {
    title: 'Tired of Manual Expense Tracking?',
    description: 'Free up your time and organize your finances. Scan your first receipt now and experience automated data entry for free.',
    button: { text: 'Scan Your First Receipt', link: '#playground' }
  }
};