import s from './index.module.css';

const Loading = () => {
  return (
    <div className={s.bouncingLoader}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
