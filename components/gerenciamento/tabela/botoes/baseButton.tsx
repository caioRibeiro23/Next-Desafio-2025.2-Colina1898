export default function BaseButton({ icon}: { icon: React.ReactNode }) {
    return (
        <button className="bg-dourado text-black font-bold font-cormorant-sc py-1 px-2 rounded-2xl hover:scale-105 transition-transform duration-200 drop-shadow-[0_4px_4px_black] cursor-pointer">
            {icon}
        </button>
    );
}