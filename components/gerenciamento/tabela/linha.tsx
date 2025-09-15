export default function LinhaTabela({ children }: { children: React.ReactNode }) {
    return (
        <tr className="px-4 py-2.5 w-full border border-dourado rounded-4xl">
            {children}
        </tr>
    );
}