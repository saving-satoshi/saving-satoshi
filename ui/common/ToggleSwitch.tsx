export default function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="toggle-switch min-w-[45px]">
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}
