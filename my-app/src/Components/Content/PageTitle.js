import './PageTitle.css'

const PageTitle = (props) => {
    
  return (
    <div id="page_title_header">
      <h1 style={{float: 'left'}}>
        {props.title}
      </h1>
    </div>
  );
};

export default PageTitle
