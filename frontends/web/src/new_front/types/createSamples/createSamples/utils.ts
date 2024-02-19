export interface ChatHistoryType {
  user: any[];
  bot: any[];
}

export type ChatbotProps = {
  instructions: string;
  chatHistory: ChatHistoryType;
  username: string;
  model_name: string;
  provider: string;
  num_of_samples_chatbot: number;
  num_interactions_chatbot: number;
  finishConversation: boolean;
  optionsSlider?: string[];
  setChatHistory: (chatHistory: ChatHistoryType) => void;
  showOriginalInteractions: () => void;
  setFinishConversation: (finishConversation: boolean) => void;
  updateModelInputs: (modelInputs: any) => void;
  setIsGenerativeContext: (isGenerativeContext: boolean) => void;
};

export type SimpleChatbotProps = {
  instructions: string;
  chatHistory: ChatHistoryType;
  username: string;
  modelName: string;
  provider: string;
  setChatHistory: (chatHistory: ChatHistoryType) => void;
  updateModelInputs: (modelInputs: any) => void;
  setIsGenerativeContext: (isGenerativeContext: boolean) => void;
};
