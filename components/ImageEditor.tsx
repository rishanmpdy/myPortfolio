import React, { useState } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { UploadCloudIcon } from './icons';
import DesignIdeaGenerator from './DesignIdeaGenerator';

const fileToDataUrl = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

const ImageEditor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [originalMimeType, setOriginalMimeType] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setEditedImage(null);
      setError(null);
      const dataUrl = await fileToDataUrl(file);
      setOriginalImage(dataUrl);
      setOriginalMimeType(file.type);
    }
  };

  const handleSubmit = async () => {
    if (!originalImage || !prompt || !originalMimeType) {
      setError('Please upload an image and provide a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImage(null);

    try {
      // Extract base64 data from data URL (e.g., "data:image/jpeg;base64,...")
      const base64Data = originalImage.split(',')[1];
      const newImageBase64 = await editImageWithGemini(base64Data, originalMimeType, prompt);
      setEditedImage(`data:${originalMimeType};base64,${newImageBase64}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-playground" className="py-24 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-3">AI Playground</h2>
          <p className="text-lg text-medium-text max-w-3xl mx-auto">
            Experiment with creative AI tools. Edit images with text prompts or generate new design ideas, all powered by Gemini.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Main content: Image Editor */}
          <div className="lg:col-span-2 bg-dark-card p-8 rounded-2xl border border-border-color space-y-6">
            <h3 className="text-3xl font-bold text-white">AI Image Editor</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">1. Upload Image</h4>
                <label htmlFor="file-upload" className="relative block w-full h-64 border-2 border-dashed border-border-color rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-dark-bg/50 transition-colors">
                  {originalImage ? (
                    <img src={originalImage} alt="Original" className="w-full h-full object-contain p-2 rounded-lg" />
                  ) : (
                    <>
                      <UploadCloudIcon className="w-12 h-12 text-zinc-500 mb-2" />
                      <span className="text-medium-text">Click to upload</span>
                      <span className="text-xs text-zinc-600">PNG, JPG, WEBP</span>
                    </>
                  )}
                </label>
                <input id="file-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
              </div>

              <div className="space-y-4 flex flex-col">
                <h4 className="text-xl font-bold text-white">2. Edit & Generate</h4>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'Add a retro filter'"
                  className="w-full bg-dark-bg border border-border-color rounded-lg px-4 py-3 text-light-text focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={!originalImage}
                />
                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !originalImage || !prompt}
                  className="w-full bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-hover transition-all duration-300 flex items-center justify-center disabled:bg-zinc-600 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : 'Generate Image'}
                </button>
                <div className="w-full flex-grow mt-2 bg-dark-bg rounded-lg flex justify-center items-center min-h-[150px]">
                  {isLoading ? (
                     <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : editedImage ? (
                    <img src={editedImage} alt="Edited" className="w-full h-full object-contain p-2 rounded-lg" />
                  ) : (
                    <span className="text-medium-text text-sm">Edited image will appear here</span>
                  )}
                </div>
              </div>
            </div>
            {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
          </div>

          <div className="lg:col-span-1">
            <DesignIdeaGenerator />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageEditor;