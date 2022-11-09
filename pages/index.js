import Head from 'next/head';
import styles from '../styles/Home.module.css';



export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>mdLive</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className="bg-slate-200 text-center">
				<nav className="max-w-xl mx-auto rounded-b shadow bg-white px-4 py-4">
					<h1>Welcome to <a href="https://nextjs.org">Next.js!</a></h1>
				</nav>
			</header>

			<main className="bg-slate-200">
				<section className="max-w-7xl mx-auto min-h-screen px-4 py-6 flex ch:basis-0 ch:grow ch:p-2">
					<div className="bg-white">Live</div>
					<div className="bg-slate-100">Edit</div>
				</section>
			</main>

			<footer className="bg-slate-200 text-center">
				<nav className="max-w-xl mx-auto rounded-t shadow bg-white px-4 py-12">
					<h1>Created by Ankur Seth.</h1>
				</nav>
			</footer>
		</div>
	);
}
