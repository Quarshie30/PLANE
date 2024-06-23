import React from 'react';
import './MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <article>
                <h1>Main News Headline</h1>
                <p>News content goes here...</p>
            </article>
            <aside>
                <h2>Related News</h2>
                <ul>
                    <li><a href="/">Related story 1</a></li>
                    <li><a href="/">Related story 2</a></li>
                    <li><a href="/">Related story 3</a></li>
                </ul>
            </aside>
        </main>
    );
}

export default MainContent;
