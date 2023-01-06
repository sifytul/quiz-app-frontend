export interface topicListType {
  id: number;
  youtubeID: string;
  title: string;
  noq: number;
}

export interface quizListType {
  title: string;
  options: {
    title: string;
    correct?: boolean;
    checked?: boolean;
  }[];
}
