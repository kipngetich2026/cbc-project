import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const ICON = {
  user: 'M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M20 19v-1a4 4 0 0 0-3-3.8M15 3.2a3.5 3.5 0 0 1 0 6.6',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  grid: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  clip: 'M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4',
  route: 'M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4M8 17h6a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h6',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6',
  tools: 'M4 20l4-1L19 8a2.1 2.1 0 0 0-3-3L5 16z',
  report: 'M5 3h10l4 4v14H5zM14 3v5h5M8 13h8M8 17h5',
  cap: 'M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5',
  shield: 'M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z',
};

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  btn = {
    primary: 'inline-flex h-12 items-center justify-center rounded-lg bg-[#0878d1] px-7 text-[15px] font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#066bbd] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0878d1]/30',
    outline: 'inline-flex h-12 items-center justify-center rounded-lg border-[1.5px] border-[#0878d1] bg-white px-7 text-[15px] font-bold text-[#0878d1] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0f8ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0878d1]/30',
    white: 'inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 text-[15px] font-bold text-[#103b69] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40',
    ghost: 'inline-flex h-12 items-center justify-center rounded-lg border-[1.5px] border-white/70 px-7 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40',
  };

  services = [
    { t: 'Student Management', d: 'Manage student profiles, learning information, academic progress and pathways.', icon: ICON.user },
    { t: 'Competency & Performance Tracking', d: 'Track competencies, skills, assessments and learner progress.', icon: ICON.target },
    { t: 'Classes & Subjects', d: 'Organize classes, subjects, teachers and learning activities.', icon: ICON.grid },
    { t: 'Grading & Assessment', d: 'Manage assessments, grades and performance information.', icon: ICON.clip },
    { t: 'Pathway Management', d: 'Help learners explore and manage pathways based on their interests and competencies.', icon: ICON.route },
    { t: 'Parent Portal', d: "Give parents visibility into their child's learning progress and educational journey.", icon: ICON.eye },
    { t: 'Teacher Tools', d: 'Manage classes, assessments, grading and learner performance in one place.', icon: ICON.tools },
    { t: 'Reports & Analytics', d: 'Generate useful reports and insights to support better educational decisions.', icon: ICON.report },
  ];

  steps = [
    { n: '01', t: 'Create Your Account', d: 'Register as a student, parent or teacher.' },
    { n: '02', t: 'Connect', d: 'Access the relevant learning environment and educational information.' },
    { n: '03', t: 'Track & Engage', d: 'Monitor progress, assessments, competencies and learning activities.' },
    { n: '04', t: 'Grow', d: 'Use insights and feedback to support better learning outcomes.' },
  ];

  users = [
    { t: 'Students', icon: ICON.cap, bg: 'bg-[#e3f6ea]', fg: 'text-[#16a34a]', items: ['Track competencies', 'View progress', 'Follow learning pathways', 'Monitor performance'] },
    { t: 'Parents', icon: ICON.eye, bg: 'bg-[#e1eefb]', fg: 'text-[#0878d1]', items: ['Monitor child progress', 'Stay informed', 'Support learning', 'Access relevant reports'] },
    { t: 'Teachers', icon: ICON.clip, bg: 'bg-[#ece8fb]', fg: 'text-[#5b3fd0]', items: ['Manage classes', 'Record assessments', 'Track competencies', 'Monitor performance'] },
    { t: 'Administrators', icon: ICON.shield, bg: 'bg-[#fdf1cf]', fg: 'text-[#d99a0b]', items: ['Manage users', 'Manage academic structures', 'View reports', 'Monitor school performance'] },
  ];

  badges = ['Student Management', 'Assessments', 'Competencies', 'Pathways', 'Reports', 'Analytics'];
}