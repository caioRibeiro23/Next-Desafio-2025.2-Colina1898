export default function BaseButton({ icon, onClick }: { icon: React.ReactNode, onClick?: () => void }) {
    return (
        <button onClick={onClick} className="bg-dourado text-black font-bold font-cormorant-sc py-1 px-2 md:py-0.5 md:px-1 bp-840:py-1 bp-840:px-2 rounded-2xl hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer">
            {icon}
        </button>
    );
}