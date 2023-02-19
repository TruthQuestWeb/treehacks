import React from 'react';
import Footer from './footer';
import TreeHack from '../img/treehacks.jpeg';

const About = () => {
	return (
		<div>
			<section id="content">
				<article>
					<h2 class="headline hl1">"TruthQuest- Reveal the Unrevealed"</h2>
					<h3 class="founderh11">summerizes and Analyzes The Truthfulness of an article.</h3><br /><br />
					<p><span>- by <span>SJSU Students</span></span>In today's fast-paced world, news travels faster than ever before, but so does misinformation. The rise of social media and instant messaging has made it easier for anyone to spread fake news and conspiracy theories to a wide audience, often leading to confusion, panic, and sometimes even violence. This has made it increasingly difficult for people to determine what is true and what is not, especially when it comes to complex issues that require more nuanced analysis. To address this problem, the team behind TruthQuest has developed a sophisticated approach that utilizes a combination of machine learning models, including reinforced learning, to analyze news articles and determine their overall truthfulness.
						While the goal of TruthQuest is to assess the truthfulness of a given article, it's important to note that determining whether an article is entirely fake can be a challenging task. However, through the use of a mixture of machine learning models, TruthQuest is able to provide a percentage-based analysis of the article's overall truthfulness. By combining the results of multiple models, TruthQuest provides a more accurate and nuanced assessment of a given article's trustworthiness.
						In addition to the summary, TruthQuest also includes information about the website from which the news is sourced. This information is important as it allows readers to understand the context of the article and evaluate its reliability.This summary is generated using the cutting-edge GPT-3 language model, ensuring that it is both accurate and readable.
						Overall, TruthQuest is a valuable tool for anyone looking to stay informed about the latest news and current events.
						<br /><br />
						<div>
							<img class="foundermedia" src={TreeHack} alt="Vestibulum molestie porttitor sem, iaculis mattis neque varius interdum." />
							<figcaption class="founderfigcaption">"Richard, Jerry and Shwetha at TreeHack'23"</figcaption>
						</div>
						<cite>TruthQuest also summerizes to avoid the redundated information and also includes the website information from where the news is driven</cite>
						In the age of information overload, it can be challenging to keep up with the constant flow of news and stay informed without feeling overwhelmed. This is where the TruthQuest program comes in. In addition to assessing the truthfulness of news articles, TruthQuest also provides a concise and objective summary of the article, ensuring that readers can easily understand the main points without getting bogged down in redundant information.
						By removing opinionated sentences and highlighting key facts and figures, TruthQuest provides a streamlined version of the article that is both informative and easy to digest.
						In addition to the summary, TruthQuest also includes information about the website from which the news is sourced. This information is important as it allows readers to understand the context of the article and evaluate its reliability.
					</p>
				</article>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default About;
