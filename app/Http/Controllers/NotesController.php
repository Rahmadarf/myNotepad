<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class NotesController extends Controller
{
    public function index(): Response
    {
        $notes = Note::where('user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return Inertia::render('notes/index', [
            'notes' => $notes,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('notes/create');
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $request->user()->notes()->create($validated);

        return redirect()->route('notes.index');
    }

    public function edit(Note $note): Response
    {
        Gate::authorize('update', $note);
        return Inertia::render('notes/edit', [
            'note' => $note,
        ]);
    }

    public function update(Request $request, Note $note): RedirectResponse
    {
        Gate::authorize('update', $note);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
        ]);

        $note->update($validated);

        return redirect()->route('notes.index');
    }

    public function destroy(Note $note): RedirectResponse
    {
        Gate::authorize('delete', $note);
        $note->delete();
        return redirect()->route('notes.index');
    }
}