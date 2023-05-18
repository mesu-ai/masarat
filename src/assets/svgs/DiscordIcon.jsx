// 14,16
const DiscordIcon = ({ width = 20, height =16 , className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.36101 6.44811C5.15298 6.46522 4.95899 6.55995 4.81758 6.71348C4.67616 6.86701 4.59766 7.0681 4.59766 7.27684C4.59766 7.48557 4.67616 7.68667 4.81758 7.84019C4.95899 7.99372 5.15298 8.08845 5.36101 8.10556C5.46569 8.10173 5.56858 8.07719 5.66374 8.03338C5.7589 7.98956 5.84443 7.92734 5.91541 7.85029C5.98638 7.77324 6.04139 7.68289 6.07727 7.58447C6.11314 7.48604 6.12916 7.38149 6.12441 7.27684C6.12954 7.1721 6.11378 7.06738 6.07805 6.96879C6.04232 6.87021 5.98732 6.77971 5.91628 6.70258C5.84523 6.62546 5.75954 6.56324 5.66421 6.51955C5.56888 6.47586 5.46581 6.45157 5.36101 6.44811ZM8.0861 6.44811C7.9193 6.4344 7.75224 6.47134 7.60677 6.5541C7.4613 6.63687 7.34419 6.76161 7.27076 6.912C7.19732 7.0624 7.17099 7.23145 7.19518 7.39706C7.21938 7.56267 7.29299 7.71712 7.40638 7.84022C7.51978 7.96332 7.66768 8.04933 7.83075 8.08702C7.99382 8.1247 8.16446 8.1123 8.32037 8.05143C8.47628 7.99057 8.61019 7.88407 8.70459 7.74587C8.799 7.60767 8.8495 7.4442 8.8495 7.27684C8.85426 7.17234 8.8383 7.06793 8.80254 6.96962C8.76679 6.87132 8.71194 6.78105 8.64116 6.70403C8.57038 6.627 8.48506 6.56474 8.39012 6.52082C8.29518 6.47689 8.19249 6.45218 8.08797 6.44811H8.0861Z'
        fill='#657791'
      />
      <path
        d='M11.7186 0.183594H1.71414C1.5125 0.184083 1.31293 0.224315 1.12685 0.301988C0.940769 0.379662 0.771825 0.493253 0.629677 0.636268C0.48753 0.779282 0.374967 0.948914 0.298426 1.13546C0.221885 1.32201 0.182867 1.52182 0.183604 1.72346V11.8156C0.182867 12.0173 0.221885 12.2171 0.298426 12.4036C0.374967 12.5902 0.48753 12.7598 0.629677 12.9028C0.771825 13.0459 0.940769 13.1594 1.12685 13.2371C1.31293 13.3148 1.5125 13.355 1.71414 13.3555H10.1806L9.7849 11.9743L10.7405 12.8609L11.6439 13.6971L13.2491 15.1156V1.72346C13.2499 1.52182 13.2108 1.32201 13.1343 1.13546C13.0578 0.948914 12.9452 0.779282 12.8031 0.636268C12.6609 0.493253 12.492 0.379662 12.3059 0.301988C12.1198 0.224315 11.9202 0.184083 11.7186 0.183594V0.183594ZM8.83671 9.93608C8.83671 9.93608 8.56794 9.61504 8.34396 9.32946C8.88554 9.20292 9.36489 8.88886 9.69717 8.44287C9.42853 8.62166 9.1405 8.76943 8.83858 8.88337C8.49126 9.03162 8.128 9.13935 7.75601 9.20441C7.11658 9.32214 6.46081 9.3196 5.82231 9.19694C5.44746 9.1236 5.08009 9.01614 4.72481 8.8759C4.42479 8.75958 4.13819 8.61127 3.86995 8.43354C4.18945 8.87053 4.6516 9.18215 5.1765 9.31453C4.95252 9.59824 4.67628 9.93421 4.67628 9.93421C4.23278 9.94619 3.79313 9.84895 3.39604 9.65106C2.99896 9.45316 2.65661 9.16069 2.39914 8.79938C2.4228 7.28594 2.78977 5.79764 3.47238 4.44669C4.07417 3.97409 4.80794 3.70015 5.5722 3.66276L5.64686 3.75235C4.92843 3.93014 4.25801 4.26408 3.6833 4.7304C3.6833 4.7304 3.84755 4.6408 4.12379 4.51388C4.66104 4.26872 5.23365 4.10998 5.82044 4.04352C5.86224 4.03487 5.90471 4.02988 5.94737 4.02859C6.44768 3.96341 6.954 3.95839 7.4555 4.01366C8.24416 4.10374 9.00759 4.34722 9.70277 4.7304C9.1572 4.2863 8.52355 3.96311 7.84373 3.78221L7.94826 3.66276C8.71252 3.70015 9.44629 3.97409 10.0481 4.44669C10.7307 5.79764 11.0977 7.28594 11.1213 8.79938C10.8619 9.16064 10.5182 9.45305 10.12 9.65116C9.72187 9.84927 9.28131 9.94708 8.83671 9.93608Z'
        fill='#657791'
      />
    </svg>
  );
};

export default DiscordIcon;
