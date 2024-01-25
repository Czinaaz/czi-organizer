import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProgressBar
        height="150"
        width="150"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#ffff00"
        barColor="#0084ff"
      />
    </div>
  );
};