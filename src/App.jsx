import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import ProposalSection from './components/ProposalSection';
import ScrapbookSection from './components/ScrapbookSection';
import MusicPlayer from './components/MusicPlayer';
import LoveNoteButton from './components/LoveNoteButton';
import LoveNoteModal from './components/LoveNoteModal';
import MusicPromptModal from './components/MusicPromptModal';

function App() {
    const [hasAccepted, setHasAccepted] = useState(false);
    const [showLoveNote, setShowLoveNote] = useState(false);
    const [showMusicPrompt, setShowMusicPrompt] = useState(false);
    const [musicStarted, setMusicStarted] = useState(false);

    // Ref to control music player from parent
    const musicPlayerRef = useRef(null);

    const handleYesClick = () => {
        setHasAccepted(true);
        setShowMusicPrompt(true); // Show music prompt when entering second page
    };

    const handleStartMusic = () => {
        setShowMusicPrompt(false);
        setMusicStarted(true);
        // The MusicPlayer will auto-play when musicStarted becomes true
    };

    const handleSkipMusic = () => {
        setShowMusicPrompt(false);
        setMusicStarted(true); // Still remove blur, just don't auto-play
    };

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Main Content */}
            <AnimatePresence mode="wait">
                {!hasAccepted ? (
                    <ProposalSection key="proposal" onYesClick={handleYesClick} />
                ) : (
                    <ScrapbookSection key="scrapbook" />
                )}
            </AnimatePresence>

            {/* Floating Elements (only show after acceptance) */}
            {hasAccepted && (
                <>
                    <MusicPlayer autoPlay={musicStarted && !showMusicPrompt} />
                    <LoveNoteButton onClick={() => setShowLoveNote(true)} />
                </>
            )}

            {/* Music Prompt Modal */}
            <AnimatePresence>
                {showMusicPrompt && (
                    <MusicPromptModal
                        onStartMusic={handleStartMusic}
                        onSkip={handleSkipMusic}
                    />
                )}
            </AnimatePresence>

            {/* Love Note Modal */}
            <AnimatePresence>
                {showLoveNote && (
                    <LoveNoteModal onClose={() => setShowLoveNote(false)} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
