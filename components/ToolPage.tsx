
import React, { useState, useCallback, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { runPdfTool } from '../utils/pdf';

const colorVariants: { [key: string]: { bg: string, text: string, border: string, hoverBg: string, ring: string } } = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-300', hoverBg: 'hover:bg-blue-700', ring: 'ring-blue-500' },
  green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-300', hoverBg: 'hover:bg-green-700', ring: 'ring-green-500' },
  purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-300', hoverBg: 'hover:bg-purple-700', ring: 'ring-purple-500' },
  orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-300', hoverBg: 'hover:bg-orange-700', ring: 'ring-orange-500' },
  sky: { bg: 'bg-sky-600', text: 'text-sky-600', border: 'border-sky-300', hoverBg: 'hover:bg-sky-700', ring: 'ring-sky-500' },
  teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-300', hoverBg: 'hover:bg-teal-700', ring: 'ring-teal-500' },
  lime: { bg: 'bg-lime-600', text: 'text-lime-600', border: 'border-lime-300', hoverBg: 'hover:bg-lime-700', ring: 'ring-lime-500' },
  red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-300', hoverBg: 'hover:bg-red-700', ring: 'ring-red-500' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-300', hoverBg: 'hover:bg-emerald-700', ring: 'ring-emerald-500' },
  indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-300', hoverBg: 'hover:bg-indigo-700', ring: 'ring-indigo-500' },
  yellow: { bg: 'bg-yellow-600', text: 'text-yellow-600', border: 'border-yellow-300', hoverBg: 'hover:bg-yellow-700', ring: 'ring-yellow-500' },
  default: { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-300', hoverBg: 'hover:bg-gray-700', ring: 'ring-gray-500' },
};

type CompressionLevel = 'less' | 'recommended' | 'extreme';

const ToolPage: React.FC = () => {
    const { selectedTool, setSelectedTool } = useNavigation();
    const [files, setFiles] = useState<File[]>([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    // Tool specific options
    const [password, setPassword] = useState('');
    const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('recommended');

    useEffect(() => {
        // Reset state when tool changes
        setFiles([]);
        setResult(null);
        setError(null);
        setPassword('');
        setCompressionLevel('recommended');
    }, [selectedTool]);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles(Array.from(event.target.files));
            setResult(null);
            setError(null);
        }
    };

    const handleSubmit = async () => {
        if (!selectedTool || files.length === 0) return;

        setIsProcessing(true);
        setResult(null);
        setError(null);

        const options = {
            ...(selectedTool.options?.includes('password') && { password }),
            ...(selectedTool.options?.includes('compressionLevel') && { level: compressionLevel }),
        };

        try {
            const response = await runPdfTool(selectedTool.id, files, options);
            setResult(response);
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsProcessing(false);
            // Don't clear files here to allow user to see what they processed
        }
    };

    if (!selectedTool) return null;

    const { name, description, icon, color, id, options } = selectedTool;
    const allowMultiple = id === 'merge-pdf';
    const theme = colorVariants[color] || colorVariants.default;
    
    const isSubmitDisabled = files.length === 0 || isProcessing || (options?.includes('password') && !password);

    const renderToolOptions = () => {
        if (!options || files.length === 0 || result) return null;

        return (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-lg text-gray-800 mb-4">Tool Options</h3>
                <div className="space-y-4">
                    {options.includes('password') && (
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Set Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 ${theme.ring} focus:border-transparent sm:text-sm`}
                            />
                        </div>
                    )}
                    {options.includes('compressionLevel') && (
                        <div>
                            <span className="block text-sm font-medium text-gray-700 mb-2">Compression Level</span>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <button onClick={() => setCompressionLevel('less')} className={`p-3 rounded-md border text-left transition-all duration-200 ${compressionLevel === 'less' ? `${theme.bg} text-white border-transparent shadow-md` : 'bg-white hover:bg-gray-100'}`}>
                                    <span className="font-semibold block">Less Compression</span>
                                    <span className="text-xs">Higher Quality</span>
                                </button>
                                <button onClick={() => setCompressionLevel('recommended')} className={`p-3 rounded-md border text-left transition-all duration-200 ${compressionLevel === 'recommended' ? `${theme.bg} text-white border-transparent shadow-md` : 'bg-white hover:bg-gray-100'}`}>
                                    <span className="font-semibold block">Recommended</span>
                                    <span className="text-xs">Balanced</span>
                                </button>
                                <button onClick={() => setCompressionLevel('extreme')} className={`p-3 rounded-md border text-left transition-all duration-200 ${compressionLevel === 'extreme' ? `${theme.bg} text-white border-transparent shadow-md` : 'bg-white hover:bg-gray-100'}`}>
                                    <span className="font-semibold block">Extreme Compression</span>
                                    <span className="text-xs">Smallest Size</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-4xl mx-auto">
            <button onClick={() => setSelectedTool(null)} className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Tools
            </button>
            <div className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${theme.bg.replace('600', '100')} ${theme.text} mx-auto mb-4`}>
                    {React.cloneElement(icon, { className: 'h-10 w-10' })}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">{name}</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">{description}</p>
            </div>

            <div className="mt-12">
                {!result && (
                    <div className={`p-8 border-2 ${theme.border} border-dashed rounded-xl bg-white text-center`}>
                        <input
                            type="file"
                            id="file-upload"
                            multiple={allowMultiple}
                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.html"
                            onChange={handleFileChange}
                            className="sr-only"
                        />
                        <label htmlFor="file-upload" className={`relative cursor-pointer ${theme.bg} text-white px-6 py-3 rounded-md ${theme.hoverBg} transition-colors duration-200 text-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}>
                            Select File{allowMultiple && 's'}
                        </label>
                        <p className="mt-4 text-gray-500">or drop files here</p>
                    </div>
                )}

                {files.length > 0 && !result && (
                    <div className="mt-6">
                        <h3 className="font-semibold text-gray-700">Selected files:</h3>
                        <ul className="mt-2 space-y-2">
                            {files.map((file, index) => (
                                <li key={index} className="p-3 bg-gray-100 rounded-md text-sm text-gray-800 flex justify-between items-center">
                                    <span>{file.name}</span>
                                    <span>{(file.size / 1024).toFixed(2)} KB</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
                {renderToolOptions()}

                {result && (
                    <div className="mt-8 p-6 bg-green-50 text-green-800 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                        <h3 className="font-bold text-lg">Success!</h3>
                        <p className="mt-1">{result}</p>
                    </div>
                )}
                {error && (
                    <div className="mt-8 p-6 bg-red-50 text-red-800 border-l-4 border-red-500 rounded-r-lg shadow-sm">
                        <h3 className="font-bold text-lg">Error</h3>
                        <p className="mt-1">{error}</p>
                    </div>
                )}

                <div className="mt-8 text-center">
                    {isProcessing ? (
                         <div className="flex items-center justify-center text-lg text-gray-600">
                            <svg className={`animate-spin -ml-1 mr-3 h-6 w-6 ${theme.text}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Processing...</span>
                        </div>
                    ) : !result ? (
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitDisabled}
                            className={`px-8 py-3 rounded-md text-white font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${theme.bg} ${theme.hoverBg} disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none`}
                        >
                            {name}
                        </button>
                    ) : (
                         <button onClick={() => {setResult(null); setFiles([])}} className={`px-8 py-3 rounded-md text-white font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 ${theme.bg} ${theme.hoverBg}`}>
                            Process Another File
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToolPage;