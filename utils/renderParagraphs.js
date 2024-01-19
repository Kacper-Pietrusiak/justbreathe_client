export const renderParagraphs = (text) => {
  const paragraphs = text.split("\n");
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="base-medium">
      {paragraph}
    </p>
  ));
};
