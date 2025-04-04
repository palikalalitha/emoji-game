import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    console.log(emojiName)
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img
          className="emoji-icon"
          src={emojiUrl}
          alt={emojiName}
          title={emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiCard
