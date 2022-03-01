export interface Event {
  title: string;
  date: string;
  description: string;
  youtubeUrl: string;
  kommunityUrl: string;
  lecturer: Lecturer;
}

interface Lecturer {
  avatar: string;
  name: string;
  company: string;
  linkedin: string;
}
