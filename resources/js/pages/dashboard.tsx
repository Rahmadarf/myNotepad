import { Head, Link } from '@inertiajs/react';
import notes from '@/routes/notes';

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col items-center justify-center px-6 py-16">
                {/* Icon / ornament */}
                <div className="mb-8 w-14 h-14 rounded-full border border-[#DDD8CE] dark:border-[#2C2C28] bg-white dark:bg-[#1C1C19] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#8C8878] dark:text-[#6B6860]">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                    </svg>
                </div>

                <p
                    className="text-[11px] tracking-[0.25em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-3 font-sans"
                >
                    Welcome back
                </p>
                <h1
                    className="text-3xl font-normal text-[#1a1a17] dark:text-[#E8E5DE] mb-3 text-center"
                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                    MyNotepad
                </h1>
                <p className="font-sans text-[14px] text-[#8C8878] dark:text-[#6B6860] mb-10 text-center max-w-xs leading-relaxed">
                    All your personal notes live here. Start writing or pick up where you left off.
                </p>

                <Link
                    href={notes.index()}
                    className="font-sans text-[13px] tracking-wide px-7 py-3 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity"
                >
                    View My Notes →
                </Link>
            </div>
        </>
    );
}

Dashboard.layout = {};