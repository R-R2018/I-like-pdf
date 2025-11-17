

import React from 'react';
import { Tool, ToolCategory } from './types';

// FIX: Define a props type for icons and update all icon components to accept a `className` prop.
// This resolves the TypeScript error in ToolPage.tsx when using React.cloneElement.
type IconProps = {
  className?: string;
};

// Icon Components
const MergeIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" transform="rotate(45 12 12)" /></svg>;
const SplitIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M8 10H4a2 2 0 00-2 2v0a2 2 0 002 2h4m8-4h4a2 2 0 012 2v0a2 2 0 01-2 2h-4" /></svg>;
const CompressIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>;
const FileWordIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const FilePowerpointIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 17V7h2.5c1.93 0 3.5 1.57 3.5 3.5S14.43 14 12.5 14H10" /><path strokeLinecap="round" strokeLinejoin="round" d="M10 21H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2h-1" /></svg>;
const FileExcelIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const EditIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
const FileImageIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const SignatureIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const WatermarkIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10s5 2 7 0" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 110-20 10 10 0 010 20z" /></svg>;
const RotateIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3l3 3m0 0l-3 3m3-3H6a3 3 0 00-3 3v6" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21l-3-3m0 0l3-3m-3 3h12a3 3 0 003-3v-6" /></svg>;
const HtmlIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const UnlockIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /><path d="M7 7V7a4 4 0 014-4v0" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/></svg>;
const LockIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const OrganizeIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
const PdfAIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13l-3-3-3 3" /></svg>;
const RepairIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PageNumbersIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16V4m5 16l-4-16" /></svg>;
const ScanIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM3 12h18" /></svg>;
const OcrIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10v.01M14 10v.01M10 14v.01M14 14v.01" /></svg>;
const CompareIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" opacity="0.6" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 17v-2m3 2v-4m3 4v-6m2 10H9a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const RedactIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /><path strokeLinecap="round" strokeLinejoin="round" fill="currentColor" d="M4 14h16v3H4z" /></svg>;
const CropIcon = ({ className = "h-6 w-6" }: IconProps) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15V9a2 2 0 012-2h6m-6 8h6a2 2 0 002-2V9m8 6V9a2 2 0 00-2-2h-6m6 8h-6a2 2 0 01-2-2V9" /></svg>;


export const TOOLS: Tool[] = [
  // Organize
  { id: 'merge-pdf', name: 'Merge PDF', description: 'Combine multiple PDF files into a single, unified document.', icon: <MergeIcon />, category: ToolCategory.ORGANIZE, color: 'orange' },
  { id: 'split-pdf', name: 'Split PDF', description: 'Extract specific pages or split a PDF into multiple files.', icon: <SplitIcon />, category: ToolCategory.ORGANIZE, color: 'orange' },
  { id: 'organize-pdf', name: 'Organize PDF', description: 'Sort, add, and remove pages from your PDF files.', icon: <OrganizeIcon />, category: ToolCategory.ORGANIZE, color: 'red' },
  
  // Optimize
  { id: 'compress-pdf', name: 'Compress PDF', description: 'Reduce the file size of your PDF while maintaining quality.', icon: <CompressIcon />, category: ToolCategory.OPTIMIZE, color: 'green', options: ['compressionLevel'] },
  { id: 'repair-pdf', name: 'Repair PDF', description: 'Repair a damaged PDF and recover data from corrupt PDF.', icon: <RepairIcon />, category: ToolCategory.OPTIMIZE, color: 'green' },
  { id: 'ocr-pdf', name: 'OCR PDF', description: 'Convert scanned PDF into searchable and selectable documents.', icon: <OcrIcon />, category: ToolCategory.OPTIMIZE, color: 'lime' },

  // Convert
  { id: 'pdf-to-word', name: 'PDF to Word', description: 'Easily convert your PDF files into editable Word documents.', icon: <FileWordIcon />, category: ToolCategory.CONVERT, color: 'blue' },
  { id: 'pdf-to-powerpoint', name: 'PDF to PowerPoint', description: 'Turn your PDF files into easy to edit PPT and PPTX slideshows.', icon: <FilePowerpointIcon />, category: ToolCategory.CONVERT, color: 'orange' },
  { id: 'pdf-to-excel', name: 'PDF to Excel', description: 'Convert PDF tables into editable Excel spreadsheets.', icon: <FileExcelIcon />, category: ToolCategory.CONVERT, color: 'green' },
  { id: 'word-to-pdf', name: 'Word to PDF', description: 'Convert your Word documents to PDF with perfect formatting.', icon: <FileWordIcon />, category: ToolCategory.CONVERT, color: 'blue' },
  { id: 'powerpoint-to-pdf', name: 'PowerPoint to PDF', description: 'Convert PPT and PPTX presentations to PDF.', icon: <FilePowerpointIcon />, category: ToolCategory.CONVERT, color: 'orange' },
  { id: 'excel-to-pdf', name: 'Excel to PDF', description: 'Turn your Excel sheets into easy-to-share PDF files.', icon: <FileExcelIcon />, category: ToolCategory.CONVERT, color: 'green' },
  { id: 'pdf-to-jpg', name: 'PDF to JPG', description: 'Convert PDF pages into high-quality JPG images.', icon: <FileImageIcon />, category: ToolCategory.CONVERT, color: 'yellow' },
  { id: 'jpg-to-pdf', name: 'JPG to PDF', description: 'Convert JPG images to PDF. Adjust orientation and margins.', icon: <FileImageIcon />, category: ToolCategory.CONVERT, color: 'yellow' },
  { id: 'html-to-pdf', name: 'HTML to PDF', description: 'Convert webpages in HTML to PDF.', icon: <HtmlIcon />, category: ToolCategory.CONVERT, color: 'yellow' },
  { id: 'pdf-to-pdfa', name: 'PDF to PDF/A', description: 'Transform your PDF to PDF/A for long-term archiving.', icon: <PdfAIcon />, category: ToolCategory.CONVERT, color: 'blue' },
  { id: 'scan-to-pdf', name: 'Scan to PDF', description: 'Capture document scans and send them to your browser.', icon: <ScanIcon />, category: ToolCategory.CONVERT, color: 'orange' },
  
  // Edit
  { id: 'edit-pdf', name: 'Edit PDF', description: 'Add text, images, and shapes to your PDF document.', icon: <EditIcon />, category: ToolCategory.EDIT, color: 'purple' },
  { id: 'page-numbers', name: 'Page numbers', description: 'Add page numbers into PDFs with ease.', icon: <PageNumbersIcon />, category: ToolCategory.EDIT, color: 'purple' },
  { id: 'watermark-pdf', name: 'Watermark', description: 'Stamp an image or text over your PDF in seconds.', icon: <WatermarkIcon />, category: ToolCategory.EDIT, color: 'purple' },
  { id: 'rotate-pdf', name: 'Rotate PDF', description: 'Rotate one or all pages in your PDF file as needed.', icon: <RotateIcon />, category: ToolCategory.EDIT, color: 'purple' },
  { id: 'crop-pdf', name: 'Crop PDF', description: 'Crop margins of PDF documents or select specific areas.', icon: <CropIcon />, category: ToolCategory.EDIT, color: 'purple' },
  { id: 'compare-pdf', name: 'Compare PDF', description: 'Show a side-by-side document comparison.', icon: <CompareIcon />, category: ToolCategory.EDIT, color: 'blue' },
  
  // Security
  { id: 'sign-pdf', name: 'Sign PDF', description: 'Sign yourself or request electronic signatures from others.', icon: <SignatureIcon />, category: ToolCategory.SECURITY, color: 'blue' },
  { id: 'protect-pdf', name: 'Protect PDF', description: 'Add a password to your PDF to restrict access.', icon: <LockIcon />, category: ToolCategory.SECURITY, color: 'blue', options: ['password'] },
  { id: 'unlock-pdf', name: 'Unlock PDF', description: 'Remove passwords and restrictions from your PDF files.', icon: <UnlockIcon />, category: ToolCategory.SECURITY, color: 'blue' },
  { id: 'redact-pdf', name: 'Redact PDF', description: 'Permanently remove sensitive information from a PDF.', icon: <RedactIcon />, category: ToolCategory.SECURITY, color: 'indigo' },
];


export const TOOL_CATEGORIES = [
  { id: ToolCategory.ORGANIZE, title: 'Organize PDF' },
  { id: ToolCategory.OPTIMIZE, title: 'Optimize PDF' },
  { id: ToolCategory.CONVERT, title: 'Convert to/from PDF' },
  { id: ToolCategory.EDIT, title: 'Edit PDF' },
  { id: ToolCategory.SECURITY, title: 'PDF Security' },
];