
export interface NavLinkProps {
  to: string;
  label: string;
  isActive?: boolean;
}

export interface KPI {
  label: string;
  val: string;
  change: string;
  sub: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  tag: string;
  desc: string;
  capabilities: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}
