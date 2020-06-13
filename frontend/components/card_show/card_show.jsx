import React from "react";
import { debounce } from "throttle-debounce";
import CardActions from "./card_actions_menu";
import CommentBlockContainer from "./comment_block_container"
import DueDateBlockContainer from "./due_date_block_container"

class CardShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: this.props.card.title,
      description: this.props.card.description,
    }

    // this.startEditing = this.startEditing.bind(this)
    // this.stopEditing = this.stopEditing.bind(this)
    this.autoExpand = this.autoExpand.bind(this)
    this.showSave = this.showSave.bind(this)
  }

  componentDidMount() {
    this.autoExpand();
    window.addEventListener("resize", debounce(300, this.autoExpand))
    // fetch comments
  }

  componentDidUpdate(prevProps) {
    // if the description, title, etc. is changed, fetch card
    // if the comments are changed, fetch comments
    //maybe not to the above. just ensure the props are based on state that would change
    if (prevProps && this.props.title !== prevProps.title) {
      this.setState({ titleInput: this.props.title })
    }

  }

  componentWillUnmount() {
    this.rename(null, "title")
    this.rename(null, "description")
    window.removeEventListener("resize", debounce(300, this.autoExpand))
  }

  handleChange(e, field) {
    this.setState({ [field]: e.target.value }, this.autoExpand)
  }

  rename(e, field) {
    if (e) e.preventDefault()
    if ((field === "description" || this.state[field]) && this.state[field] !== this.props.card[field]) {
      let newCard = Object.assign(this.props.card, { [field]: this.state[field] })
      this.props.updateCard(newCard)
      this.setState({ [field]: newCard[field] })
    } else {
      this.setState({ [field]: this.props.card[field] })
    }
    let save = document.getElementById(`description-save`)
    save.classList.add("no-height")
  }

  keyPress(e, field) {
    let origTitle = this.props.card.title;
    let origDesc = this.props.card.description;

    if (e.keyCode === 13) {
      if (field === "title") e.target.blur()
    } else if (e.keyCode === 27) {
      this.setState({ title: origTitle, description: origDesc }, () => {
        let titleText = document.getElementById(`card-show-title-edit`)
        let descriptionText = document.getElementById(`card-show-description-edit`)
        titleText.blur();
        descriptionText.blur();
      })
    }
  }

  autoExpand() {
    let titleText = document.getElementById(`card-show-title-edit`)
    titleText.style.height = 0;
    const heightT = titleText.scrollHeight + 4
    titleText.style.height = heightT + 'px';

    let descriptionText = document.getElementById(`card-show-description-edit`)
    descriptionText.style.height = 0;
    const heightD = Math.max(descriptionText.scrollHeight + 4, 50)
    descriptionText.style.height = heightD + 'px';
  };

  showSave() {
    let save = document.getElementById(`description-save`)
    save.classList.remove("no-height")
  }

  render() {
    const { card,
            listTitle,
            closeModal,
            updateCard,
            deleteCard 
          } = this.props;

    let {title, description} = this.state;
    if (!description) description = ""

    const titleBlock = (
      <div id="card-show-title" className="card-show-container">
        <span className="material-icons">
          label
        </span>
        <textarea
          id="card-show-title-edit"
          className="card-show-textarea"
          value={title}
          onChange={(e) => this.handleChange(e, "title")}
          onKeyDown={(e) => this.keyPress(e, "title")}
          onBlur={(e) => this.rename(e, "title")}
          spellCheck="false"
        />
        <div id="card-show-list" className="card-show-sub">
          In list "{listTitle}"
        </div>
      </div>
    )

    const descriptionBlock = (
      <div id="card-show-description" className="card-show-container">
        <div className="card-show-heading">
          <span className="material-icons">
            subject
          </span>
          <div>Description</div>
        </div>
        <form
          className="card-show-sub"
          onSubmit={(e) => this.rename(e, "description")}
        >
          <textarea
            className="card-show-textarea"
            id="card-show-description-edit"
            placeholder="Add a more detailed description..."
            value={description}
            onChange={(e) => this.handleChange(e, "description")}
            onKeyDown={(e) => this.keyPress(e, "description")}
            onBlur={(e) => this.rename(e, "description")}
            onFocus={this.showSave}
            spellCheck="false"
          />
        </form>
        <div id="description-save" className="card-show-save no-height">Save</div>
      </div>
    ) ;

    return(
      <div id="card-show">
        <span className="material-icons close-modal" onClick={closeModal}>
          clear
        </span>
        <div id="card-show-header">
          {titleBlock}
        </div>
        <div id="card-show-body">
          <div id="card-show-attributes">
            {descriptionBlock}
            <DueDateBlockContainer card={card} />
            <CommentBlockContainer card={card} />
          </div>
          <CardActions
            card={card}
            updateCard={updateCard}
            deleteCard={deleteCard}
            closeModal={closeModal}
          />
        </div>
      </div>
    )
  }
}

export default CardShow;