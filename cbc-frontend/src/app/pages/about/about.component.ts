import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const ICON = {
  user: 'M16 19v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M20 19v-1a4 4 0 0 0-3-3.8M15 3.2a3.5 3.5 0 0 1 0 6.6',
  chart: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M9 7h6',
  shield: 'M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6z',
  clip: 'M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4',
};

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  btn = {
    primary: 'inline-flex h-12 items-center justify-center rounded-lg bg-[#0878d1] px-7 text-[15px] font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#066bbd] hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0878d1]/30',
    outline: 'inline-flex h-12 items-center justify-center rounded-lg border-[1.5px] border-[#0878d1] bg-white px-7 text-[15px] font-bold text-[#0878d1] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0f8ff] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0878d1]/30',
    white: 'inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 text-[15px] font-bold text-[#103b69] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40',
    ghost: 'inline-flex h-12 items-center justify-center rounded-lg border-[1.5px] border-white/70 px-7 text-[15px] font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40',
  };

  progress = [
    { label: 'Communication', w: 'w-[85%]' },
    { label: 'Problem Solving', w: 'w-[68%]' },
    { label: 'Collaboration', w: 'w-[52%]' },
  ];

  highlights = [
    { t: 'Learner-Centered', icon: ICON.user },
    { t: 'Data-Informed', icon: ICON.chart },
    { t: 'Connected Community', icon: ICON.link },
  ];

  why = [
    { t: 'Learner-Centered', d: 'Support individual learning needs and progress.', icon: ICON.user },
    { t: 'Competency-Focused', d: 'Focus on skills, abilities and meaningful outcomes.', icon: ICON.target },
    { t: 'Data-Driven', d: 'Turn learning information into useful insights.', icon: ICON.chart },
    { t: 'Connected', d: 'Bring students, parents, teachers and administrators together.', icon: ICON.link },
  ];

  steps = [
    { t: 'Discover', d: 'Find strengths and interests.' },
    { t: 'Learn', d: 'Build knowledge through guided learning.' },
    { t: 'Practice', d: 'Apply skills in real tasks.' },
    { t: 'Track Progress', d: 'See competencies develop over time.' },
    { t: 'Achieve', d: 'Reach goals and move along a pathway.' },
  ];

  audiences = [
    { t: 'For Students', d: 'Track learning progress, develop competencies and take ownership of learning.', bg: 'bg-[#e3f6ea]', fg: 'text-[#16a34a]', icon: ICON.book },
    { t: 'For Parents', d: "Stay informed and support your child's educational journey.", bg: 'bg-[#e1eefb]', fg: 'text-[#0878d1]', icon: ICON.user },
    { t: 'For Teachers', d: 'Manage learning, assessments and student performance.', bg: 'bg-[#ece8fb]', fg: 'text-[#5b3fd0]', icon: ICON.clip },
    { t: 'For Administrators', d: 'Gain insights and streamline school operations.', bg: 'bg-[#fdf1cf]', fg: 'text-[#d99a0b]', icon: ICON.shield },
  ];
}