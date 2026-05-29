import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login } from '@/routes';
import { register } from '@/routes';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="MyNotepad" />
            <div
                className="min-h-screen bg-[#F7F4EF] dark:bg-[#111110] text-[#1a1a17] dark:text-[#E8E5DE]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
                {/* Top nav */}
                <header className="w-full border-b border-[#DDD8CE] dark:border-[#2C2C28] px-8 py-4">
                    <div className="max-w-5xl mx-auto flex items-center justify-between">
                        <span className="text-[13px] tracking-[0.2em] uppercase text-[#8C8878] dark:text-[#6B6860] font-sans">
                            MyNotepad
                        </span>
                        <nav className="flex items-center gap-3">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="font-sans text-[13px] tracking-wide px-4 py-1.5 rounded border border-[#1a1a17] dark:border-[#E8E5DE] text-[#1a1a17] dark:text-[#E8E5DE] hover:bg-[#1a1a17] hover:text-[#F7F4EF] dark:hover:bg-[#E8E5DE] dark:hover:text-[#111110] transition-colors"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="font-sans text-[13px] tracking-wide text-[#8C8878] dark:text-[#6B6860] hover:text-[#1a1a17] dark:hover:text-[#E8E5DE] transition-colors"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="font-sans text-[13px] tracking-wide px-4 py-1.5 rounded border border-[#1a1a17] dark:border-[#E8E5DE] text-[#1a1a17] dark:text-[#E8E5DE] hover:bg-[#1a1a17] hover:text-[#F7F4EF] dark:hover:bg-[#E8E5DE] dark:hover:text-[#111110] transition-colors"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero */}
                <main className="max-w-5xl mx-auto px-8 py-20 lg:py-32 flex flex-col lg:flex-row gap-16 items-start">
                    {/* Left: text */}
                    <div className="flex-1">
                        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-6">
                            Personal Notes
                        </p>
                        <h1
                            className="text-5xl lg:text-6xl font-normal leading-[1.1] mb-6 text-[#1a1a17] dark:text-[#E8E5DE]"
                            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                        >
                            Your thoughts,
                            <br />
                            <em className="italic text-[#8C8878] dark:text-[#6B6860]">beautifully kept.</em>
                        </h1>
                        <p className="font-sans text-[15px] leading-relaxed text-[#5C5849] dark:text-[#9C9888] mb-10 max-w-md">
                            A quiet place to write, collect, and revisit your ideas. Simple. Personal. Yours.
                        </p>

                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="font-sans inline-block text-[13px] tracking-wide px-7 py-3 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity"
                            >
                                Go to My Notes →
                            </Link>
                        ) : (
                            <div className="flex gap-3 items-center">
                                <Link
                                    href={register()}
                                    className="font-sans inline-block text-[13px] tracking-wide px-7 py-3 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity"
                                >
                                    Get Started →
                                </Link>
                                <Link
                                    href={login()}
                                    className="font-sans text-[13px] text-[#8C8878] dark:text-[#6B6860] hover:text-[#1a1a17] dark:hover:text-[#E8E5DE] transition-colors"
                                >
                                    Already have an account?
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right: decorative notebook card */}
                    <div className="w-full lg:w-[340px] shrink-0">
                        <div className="bg-white dark:bg-[#1C1C19] border border-[#DDD8CE] dark:border-[#2C2C28] rounded-sm shadow-sm overflow-hidden">
                            {/* Notebook header */}
                            <div className="border-b border-[#DDD8CE] dark:border-[#2C2C28] px-6 py-4 flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#E8C89A]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#A8C89A]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#9AB8D8]"></div>
                            </div>
                            {/* Note lines */}
                            <div className="px-6 py-6 space-y-4">
                                {[
                                    { title: "Meeting notes", lines: 2 },
                                    { title: "Book ideas", lines: 3 },
                                    { title: "Grocery list", lines: 2 },
                                ].map((item, i) => (
                                    <div key={i} className="border-l-2 border-[#DDD8CE] dark:border-[#3C3C38] pl-4">
                                        <div className="h-3 w-28 rounded-sm bg-[#1a1a17]/10 dark:bg-[#E8E5DE]/10 mb-2.5"></div>
                                        {Array.from({ length: item.lines }).map((_, j) => (
                                            <div
                                                key={j}
                                                className="h-2 rounded-sm bg-[#1a1a17]/5 dark:bg-[#E8E5DE]/5 mb-1.5"
                                                style={{ width: j === item.lines - 1 ? '60%' : '100%' }}
                                            ></div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Feature pills */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {['Create notes', 'Edit & update', 'Delete notes', 'Secure & personal'].map((f) => (
                                <span
                                    key={f}
                                    className="font-sans text-[11px] tracking-wide px-3 py-1 rounded-full border border-[#DDD8CE] dark:border-[#2C2C28] text-[#8C8878] dark:text-[#6B6860]"
                                >
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-[#DDD8CE] dark:border-[#2C2C28] px-8 py-5">
                    <div className="max-w-5xl mx-auto">
                        <p className="font-sans text-[11px] tracking-wide text-[#A09A8C] dark:text-[#4C4C48]">
                            MyNotepad — Simple personal notes.
                        </p>
                    </div>
                </footer>
            </div>
        </>
    );
}