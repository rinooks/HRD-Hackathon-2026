import React from 'react';
import { Mail, MapPin, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-20 pb-10 border-t border-white/5 text-gray-400 text-sm">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1">
            <h3 className="text-white text-xl font-extrabold mb-6 flex items-center gap-2">
              HRD Hackathon <span className="text-red-500">2026</span>
            </h3>
            <p className="leading-relaxed mb-6 text-gray-500">
              기업교육 전문가(담당자/강사)를 위한<br/>
              국내 최초의 노코드 AI 솔루션 해커톤.<br/>
              우리는 기술을 통해 교육의 미래를<br/>
              새롭게 정의합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#timeline" className="hover:text-red-500 transition-colors">Program</a></li>
              <li><a href="#mentors" className="hover:text-red-500 transition-colors">Mentors</a></li>
              <li><a href="#faq" className="hover:text-red-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>support@hrd-hackathon.kr</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span>서울특별시 강남구 테헤란로 427,<br/>위워크 타워 12층</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Family Sites */}
          <div>
            <h4 className="text-white font-bold text-base mb-6">Family Sites</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  기업교육AI스터디 <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  Reference HRD <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                  HRD Insight Forum <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600">
            &copy; 2026 기업교육AI스터디. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-zinc-600 hover:text-gray-400 text-xs">Privacy Policy</a>
             <a href="#" className="text-zinc-600 hover:text-gray-400 text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;