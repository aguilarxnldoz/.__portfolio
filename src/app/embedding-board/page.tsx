import PageWrapper from "@/components/PageWrapper";

export default function RandomEmbeddingsPage() {
    return (
        <>
            <PageWrapper>
                <article
                    id="embedding-board"
                    className="w-full"
                >
                    <h2>My Embedding Board</h2>
                    <div>
                        <iframe
                            width="100%"
                            height="166"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1487943871&color=%23dc143c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                        ></iframe>
                        <div
                            style={{
                                fontSize: "10px",
                                color: "#cccccc",
                                lineBreak: "anywhere",
                                wordBreak: "normal",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                                fontWeight: 100,
                            }}
                        >
                            <a
                                href="https://soundcloud.com/jenncarter41"
                                title="Jenn Carter"
                                target="_blank"
                                style={{color: "#cccccc", textDecoration: "none"}}
                            >
                                Jenn Carter
                            </a>{" "}
                            ·{" "}
                            <a
                                href="https://soundcloud.com/jenncarter41/so-rude-v2-feat-jerry-west-unreleased"
                                title="So Rude V2 (feat. Jerry West) (Unreleased)"
                                target="_blank"
                                style={{color: "#cccccc", textDecoration: "none"}}
                            >
                                So Rude V2 (feat. Jerry West) (Unreleased)
                            </a>
                        </div>
                    </div>
                </article>
            </PageWrapper>
        </>
    );
}
