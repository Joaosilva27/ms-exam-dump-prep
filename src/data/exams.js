import { sc900 } from './sc900.js';
import { sc200 } from './sc200.js';
import { sc100 } from './sc100.js';

export const exams = {
  'sc-900': { id: 'sc-900', name: 'SC-900', title: 'Microsoft Security, Compliance, and Identity Fundamentals', description: 'Foundational knowledge of security, compliance, and identity concepts and related Microsoft solutions.', color: '#0078d4', questions: sc900 },
  'sc-200': { id: 'sc-200', name: 'SC-200', title: 'Microsoft Security Operations Analyst', description: 'Investigate, hunt, and remediate threats using Microsoft Sentinel, Defender, and XDR.', color: '#7719aa', questions: sc200 },
  'sc-100': { id: 'sc-100', name: 'SC-100', title: 'Microsoft Cybersecurity Architect', description: 'Design and evolve cybersecurity strategy to protect an organization\'s assets, business, and operations.', color: '#d83b01', questions: sc100 },
};
