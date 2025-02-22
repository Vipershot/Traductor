import axios from 'axios';

interface TranslateRequest {
    source_text: string;
    source_language: string;
    target_language: string;
}

interface TranslateResponse {
    translated_text: string;
}

const translateText = async (sourceText: string, sourceLanguage: string, targetLanguage: string): Promise<TranslateResponse> => {
    const url = 'https://magicloops.dev/api/loop/8017d367-8b2c-4931-a299-9f9a7bf9024d/run';

    try {
        const response = await axios.post<TranslateResponse>(url, {
            source_text: sourceText,
            source_language: sourceLanguage,
            target_language: targetLanguage
        } as TranslateRequest, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};

export default translateText