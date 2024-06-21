import Layout from "./layout";

export default function Dashboard() {
    return (
        <Layout>
            <main>
                <h1 className={`mb-4 text-xl md:text-2xl`}>
                Dashboard
                </h1>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                Content here
                </div>
            </main>
        </Layout>
    );
}