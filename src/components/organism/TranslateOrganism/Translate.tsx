import { CardTranslate } from "../../molecule/CardTranslate/CardTranslate";
import { InputLenguage } from "../../molecule/CardTranslate/InputLenguage";
import { useState } from "react";
import { TextTranslate } from "../../molecule/CardTranslate/TextTranslate";
import translateText from "../../service/Translate";

export const Translate = () => {
  const [selectedInLanguage, setSelectedInLanguage] = useState("es");
  const [selectedOutLanguage, setSelectedOutLanguage] = useState("en");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translate, setTranslate] = useState("");
  const [loading, setLoading] = useState(false); 
  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "es",
      name: "Spanish",
    },
    {
      code: "fr",
      name: "French",
    },
    {
      code: "de",
      name: "German",
    },
  ];

  const handleInSelect = (code: string) => {
    setSelectedInLanguage(code);
  };

  const handleOutSelect = (code: string) => {
    setSelectedOutLanguage(code);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextToTranslate(event.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true when starting the request
    try {
      const response = await translateText(textToTranslate, selectedInLanguage, selectedOutLanguage);
      setTranslate(response.translated_text);
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setLoading(false); // Set loading to false when the request is complete
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(translate).then(() => {
        alert("Text copied to clipboard!");
      }).catch(err => {
        console.error("Could not copy text: ", err);
      });
    } else {
      // Fallback for mobile devices
      const textArea = document.createElement("textarea");
      textArea.value = translate;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        alert("Text copied to clipboard!");
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  };

  console.log(textToTranslate);

  return (
    <CardTranslate
      children={
        <>
          <InputLenguage
            inOptions={languages.map((lang) => ({
              code: lang.code,
              name: lang.name,
            }))}
            inSelect={handleInSelect}
            outOptions={languages.map((lang) => ({
              code: lang.code,
              name: lang.name,
            }))}
            outSelect={handleOutSelect}
          />
          <TextTranslate
            onChange={handleTextChange}
            onClick={handleSubmit}
            translateValue={loading ? "Loading..." : translate}
            onCopy={handleCopy}
          />
        </>
      }
    />
  );
};
