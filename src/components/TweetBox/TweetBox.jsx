import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox(props) {

  function handleOnTweetTextChange(e){
    props['setTweetText'](e.target.value);
  }
  function handleOnSubmit(){
    var newTweet = {
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: props.tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
      id: props.tweets.length
    }
    props['setTweets'](props['tweets'].concat(newTweet));
    props['setTweetText']("");
  }

  return (
    <div className="tweet-box">
      <TweetInput value={props['tweetText']} handleOnChange={handleOnTweetTextChange}/>
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={props.tweetText}/>
        <TweetSubmitButton tweetText={props.tweetText} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  var left= 140 - props.tweetText.length;
  let bClass = "";
  if(left < 0 )
  bClass="tweet-length red";
  else
  bClass="tweet-length";
  if(left > 139)
  return <span></span>
  else{
    return <span className={bClass}>{left}</span>
  }
}

export function TweetSubmitButton(props) {
  console.log(props.tweetText);
  let bol = (props.tweetText != null && props.tweetText.length > 140)
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={props.handleOnSubmit} disabled={((props.tweetText == '' || bol)? true:false)}>Tweet</button>
    </div>
  )
}
