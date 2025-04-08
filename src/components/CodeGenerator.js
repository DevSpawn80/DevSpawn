import React, { useState } from 'react';
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { generateCode } from '../services/codeGenerationService';

const LANGUAGES = [
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'php', label: 'PHP' }
];

function CodeGenerator({ useCredits }) {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt) {
      setError('Please enter a description of the code you need.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Each generation costs 10 credits
      useCredits(10);
      
      const code = await generateCode(prompt, language);
      setGeneratedCode(code);
    } catch (err) {
      setError('Failed to generate code. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>AI Code Generation</h3>
      <p>Describe what you want to build, and our AI will generate the code for you.</p>
      
      {error && <Alert variant="danger">{error}</Alert>}
      
      <Form.Group className="mb-3">
        <Form.Label>Select Programming Language</Form.Label>
        <Form.Select 
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="language-selector"
        >
          {LANGUAGES.map(lang => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Describe Your Code Need</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="E.g., Create a function that sorts an array of objects by a specific property"
        />
      </Form.Group>
      
      <Button 
        variant="primary" 
        onClick={handleGenerate}
        disabled={loading || !prompt}
        className="w-100"
      >
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="me-2"
            />
            Generating...
          </>
        ) : 'Generate Code'}
      </Button>
      
      {generatedCode && (
        <div className="code-output">
          <SyntaxHighlighter 
            language={language} 
            style={vscDarkPlus}
            showLineNumbers={true}
          >
            {generatedCode}
          </SyntaxHighlighter>
        </div>
      )}
    </div>
  );
}

export default CodeGenerator; 