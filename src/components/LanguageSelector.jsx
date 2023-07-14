const LANGUAGES = {
    "English": "eng_Latn",
    "Russian": "rus_Cyrl",
    "Spanish": "spa_Latn",
    "Swedish": "swe_Latn",
    "Ukrainian": "ukr_Cyrl",
}

export default function LanguageSelector({ type, onChange, defaultLanguage }) {
  return (
    <div className='language-selector'>
      <label>{type}: </label>
      <select onChange={onChange} defaultValue={defaultLanguage}>
        {Object.entries(LANGUAGES).map(([key, value]) => {
          return <option key={key} value={value}>{key}</option>
        })}
      </select>
    </div>
  )
}
