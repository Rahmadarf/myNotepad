import { Head, Link, router, usePage } from '@inertiajs/react';
import { create, destroy, edit } from '@/routes/notes';

type Note = {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
};

export default function NotesIndex() {
    const { notes } = usePage<{ notes: Note[] }>().props;

    return (
        <>
            <Head title="My Notes" />
            <div className="min-h-screen bg-[#F7F4EF] dark:bg-[#111110] px-6 py-10 lg:px-12" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                <div className="max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 flex items-end justify-between border-b border-[#DDD8CE] dark:border-[#2C2C28] pb-6">
                        <div>
                            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-1">
                                {notes.length} {notes.length === 1 ? 'note' : 'notes'}
                            </p>
                            <h1 className="text-3xl font-normal text-[#1a1a17] dark:text-[#E8E5DE]">
                                My Notes
                            </h1>
                        </div>
                        <Link
                            href={create()}
                            className="font-sans text-[12px] tracking-wide px-4 py-2 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity flex items-center gap-1.5"
                        >
                            <span>+</span> New Note
                        </Link>
                    </div>

                    {/* Empty state */}
                    {notes.length === 0 ? (
                        <div className="py-20 text-center">
                            <div className="mx-auto mb-6 w-16 h-16 rounded-full border border-[#DDD8CE] dark:border-[#2C2C28] bg-white dark:bg-[#1C1C19] flex items-center justify-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="text-[#B0A898] dark:text-[#4C4C48]">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="12" y1="18" x2="12" y2="12" />
                                    <line x1="9" y1="15" x2="15" y2="15" />
                                </svg>
                            </div>
                            <p
                                className="text-xl font-normal text-[#5C5849] dark:text-[#6B6860] mb-2"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            >
                                No notes yet
                            </p>
                            <p className="font-sans text-[13px] text-[#A09A8C] dark:text-[#4C4C48] mb-8">
                                Your first note is waiting to be written.
                            </p>
                            <Link
                                href={create()}
                                className="font-sans text-[13px] tracking-wide px-6 py-2.5 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity"
                            >
                                Write your first note →
                            </Link>
                        </div>
                    ) : (
                        <ul className="space-y-px">
                            {notes.map((note, idx) => (
                                <li
                                    key={note.id}
                                    className="group bg-white dark:bg-[#1C1C19] border border-[#DDD8CE] dark:border-[#2C2C28] rounded-sm hover:border-[#C0B8AC] dark:hover:border-[#3C3C38] transition-colors"
                                    style={{ marginTop: idx !== 0 ? '-1px' : undefined, position: 'relative', zIndex: 0 }}
                                    onMouseEnter={e => (e.currentTarget.style.zIndex = '1')}
                                    onMouseLeave={e => (e.currentTarget.style.zIndex = '0')}
                                >
                                    <div className="px-6 py-5 flex items-start justify-between gap-6">
                                        <div className="min-w-0 flex-1">
                                            {/* Index number + title */}
                                            <div className="flex items-baseline gap-3 mb-2">
                                                <span className="font-sans text-[11px] text-[#C0B8AC] dark:text-[#3C3C38] shrink-0 w-5 text-right tabular-nums">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                                <h2
                                                    className="text-[17px] font-normal text-[#1a1a17] dark:text-[#E8E5DE] truncate leading-snug"
                                                    style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                                                >
                                                    {note.title}
                                                </h2>
                                            </div>
                                            {/* Excerpt */}
                                            <p className="font-sans text-[13px] text-[#8C8878] dark:text-[#6B6860] line-clamp-2 leading-relaxed pl-8 mb-3">
                                                {note.content}
                                            </p>
                                            {/* Date */}
                                            <p className="font-sans text-[11px] text-[#C0B8AC] dark:text-[#3C3C38] pl-8 tracking-wide">
                                                {new Date(note.created_at).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </p>
                                        </div>

                                        {/* Actions — visible on hover */}
                                        <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity pt-0.5">
                                            <Link
                                                href={edit(note.id)}
                                                className="font-sans text-[11px] tracking-wide px-3 py-1.5 border border-[#DDD8CE] dark:border-[#2C2C28] rounded text-[#5C5849] dark:text-[#9C9888] hover:border-[#1a1a17] dark:hover:border-[#E8E5DE] hover:text-[#1a1a17] dark:hover:text-[#E8E5DE] transition-colors"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (confirm('Delete this note?')) {
                                                        router.delete(destroy(note.id).url);
                                                    }
                                                }}
                                                className="font-sans text-[11px] tracking-wide px-3 py-1.5 border border-[#DDD8CE] dark:border-[#2C2C28] rounded text-[#C07060] dark:text-[#A06050] hover:border-[#C07060] dark:hover:border-[#A06050] hover:bg-[#FFF5F3] dark:hover:bg-[#2C1C1A] transition-colors"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

NotesIndex.layout = {};