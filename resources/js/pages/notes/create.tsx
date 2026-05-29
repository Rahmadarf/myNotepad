import { Head, router } from '@inertiajs/react';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useForm } from '@inertiajs/react';

export default function NotesCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        content: '',
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post('/notes', {
            onSuccess: () => router.visit('/notes'),
        });
    }

    return (
        <>
            <Head title="New Note" />
            <div
                className="min-h-screen bg-[#F7F4EF] dark:bg-[#111110] px-6 py-10 lg:px-12"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
                <div className="max-w-2xl mx-auto">

                    {/* Header */}
                    <div className="mb-10 border-b border-[#DDD8CE] dark:border-[#2C2C28] pb-6">
                        <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-1">
                            New entry
                        </p>
                        <h1 className="text-3xl font-normal text-[#1a1a17] dark:text-[#E8E5DE]">
                            Create Note
                        </h1>
                    </div>

                    <form onSubmit={submit} className="space-y-8">
                        {/* Title */}
                        <div>
                            <label
                                htmlFor="title"
                                className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-3"
                            >
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                placeholder="Give your note a title…"
                                autoFocus
                                className="w-full bg-white dark:bg-[#1C1C19] border border-[#DDD8CE] dark:border-[#2C2C28] rounded-sm px-4 py-3 text-[17px] font-normal text-[#1a1a17] dark:text-[#E8E5DE] placeholder:text-[#C0B8AC] dark:placeholder:text-[#3C3C38] focus:outline-none focus:border-[#8C8878] dark:focus:border-[#6B6860] transition-colors"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            />
                            <InputError message={errors.title} className="mt-2 font-sans text-[12px]" />
                        </div>

                        {/* Content */}
                        <div>
                            <label
                                htmlFor="content"
                                className="block font-sans text-[11px] tracking-[0.2em] uppercase text-[#A09A8C] dark:text-[#6B6860] mb-3"
                            >
                                Content
                            </label>
                            <textarea
                                id="content"
                                value={data.content}
                                onChange={(e) => setData('content', e.target.value)}
                                placeholder="Write your note here…"
                                rows={12}
                                className="w-full bg-white dark:bg-[#1C1C19] border border-[#DDD8CE] dark:border-[#2C2C28] rounded-sm px-4 py-3 text-[15px] leading-relaxed text-[#1a1a17] dark:text-[#E8E5DE] placeholder:text-[#C0B8AC] dark:placeholder:text-[#3C3C38] focus:outline-none focus:border-[#8C8878] dark:focus:border-[#6B6860] transition-colors resize-none"
                                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                            />
                            <InputError message={errors.content} className="mt-2 font-sans text-[12px]" />
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2 border-t border-[#DDD8CE] dark:border-[#2C2C28]">
                            <button
                                type="submit"
                                disabled={processing}
                                className="font-sans text-[13px] tracking-wide px-6 py-2.5 bg-[#1a1a17] dark:bg-[#E8E5DE] text-[#F7F4EF] dark:text-[#111110] rounded hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                            >
                                {processing && <Spinner />}
                                Save Note
                            </button>
                            <button
                                type="button"
                                onClick={() => router.visit('/notes')}
                                className="font-sans text-[13px] text-[#8C8878] dark:text-[#6B6860] hover:text-[#1a1a17] dark:hover:text-[#E8E5DE] transition-colors px-2 py-2.5"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

NotesCreate.layout = {};