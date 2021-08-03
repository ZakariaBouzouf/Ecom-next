import Document, { Html, Head, Main, NextScript } from "next/document";
// import { GoogleFonts } from "next-google-fonts";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				{/* <GoogleFonts href='https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap' /> */}
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
