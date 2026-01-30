export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-16 w-16">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                </div>
                <p className="animate-pulse text-lg font-medium text-gray-600">Loading your adventure...</p>
            </div>
        </div>
    );
}
