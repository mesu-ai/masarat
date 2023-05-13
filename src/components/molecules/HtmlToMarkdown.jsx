
// import markdownStyles from './css/markdown-styles.module.css';
// import markdownStyles from '@/styles/globals.css';

const HtmlToMarkdown = ({ content }) => {
  
  return (
    <div className="mx-auto">
      <div className='markdown' dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default HtmlToMarkdown;