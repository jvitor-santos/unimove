interface IconProps {
  theme: 'dark' | 'light'
}

export function Logo({ theme }: IconProps) {
  const color = theme === 'light' ? '#111827' : '#F2F2F2'

  return (
    <svg
      style={{
        width: 'auto',
        height: '100%',
        maxHeight: '2.5rem',
        objectFit: 'contain',
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="780"
      height="140"
      fill="none"
      viewBox="0 0 780 140"
    >
      <rect width="32" height="32" x="36" y="108" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" y="108" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" x="72" y="72" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" x="36" y="72" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" y="72" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" x="36" y="36" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" y="36" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" x="72" fill="#16A34A" rx="4"></rect>
      <rect width="32" height="32" x="36" fill="#16A34A" rx="4"></rect>
      <path
        fill="#DC2626"
        d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16z"
      ></path>
      <path
        fill={color}
        d="M141.886 20.454V67h-9.841V20.454h9.841zm47.029 0V67h-8.5l-20.25-29.295h-.341V67h-9.841V20.454h8.636l20.091 29.273h.409V20.455h9.796zm33.38 13.387c-.181-1.833-.962-3.258-2.34-4.273-1.379-1.015-3.25-1.523-5.614-1.523-1.606 0-2.962.228-4.068.682-1.106.44-1.955 1.053-2.546 1.841a4.435 4.435 0 00-.863 2.682c-.031.833.144 1.56.522 2.182.394.621.932 1.159 1.614 1.613.682.44 1.47.826 2.364 1.16.894.318 1.848.59 2.863.818l4.182 1c2.03.454 3.894 1.06 5.591 1.818s3.167 1.69 4.409 2.795a11.598 11.598 0 012.886 3.91c.697 1.5 1.053 3.22 1.069 5.159-.016 2.848-.743 5.318-2.182 7.409-1.424 2.075-3.485 3.689-6.182 4.84-2.682 1.137-5.917 1.705-9.705 1.705-3.757 0-7.03-.576-9.818-1.727-2.772-1.152-4.939-2.856-6.5-5.114-1.545-2.273-2.356-5.083-2.432-8.432h9.523c.106 1.561.553 2.864 1.341 3.91.803 1.03 1.871 1.81 3.205 2.34 1.348.515 2.871.773 4.568.773 1.666 0 3.113-.242 4.341-.727 1.242-.485 2.204-1.16 2.886-2.023.682-.864 1.023-1.856 1.023-2.977 0-1.046-.311-1.924-.932-2.637-.606-.712-1.5-1.318-2.682-1.818-1.166-.5-2.598-.954-4.295-1.363l-5.068-1.273c-3.925-.955-7.023-2.447-9.296-4.477-2.273-2.03-3.401-4.765-3.386-8.205-.015-2.818.735-5.28 2.25-7.386 1.53-2.106 3.629-3.75 6.295-4.932 2.667-1.182 5.697-1.773 9.091-1.773 3.455 0 6.47.591 9.046 1.773 2.59 1.182 4.606 2.826 6.045 4.932 1.439 2.106 2.182 4.545 2.227 7.318h-9.432zm14.915-5.273v-8.114h38.228v8.114h-14.25V67h-9.728V28.568h-14.25zm54.364-8.114V67h-9.841V20.454h9.841zm6.324 8.114v-8.114h38.227v8.114h-14.25V67h-9.727V28.568h-14.25zm73.272-8.114h9.841v30.228c0 3.394-.81 6.363-2.431 8.909-1.607 2.545-3.857 4.53-6.75 5.955-2.894 1.408-6.266 2.113-10.114 2.113-3.864 0-7.243-.705-10.136-2.114-2.894-1.424-5.144-3.409-6.75-5.954-1.607-2.546-2.41-5.515-2.41-8.91V20.456h9.841V49.84c0 1.773.387 3.348 1.159 4.727.788 1.379 1.894 2.462 3.319 3.25 1.424.788 3.083 1.182 4.977 1.182 1.909 0 3.568-.394 4.977-1.182 1.424-.788 2.523-1.871 3.296-3.25.788-1.379 1.181-2.954 1.181-4.727V20.454zm16.165 8.114v-8.114h38.227v8.114h-14.25V67h-9.727V28.568h-14.25zm85.171 15.16c0 5.075-.962 9.393-2.887 12.954-1.909 3.56-4.515 6.28-7.818 8.159-3.288 1.864-6.985 2.795-11.091 2.795-4.136 0-7.848-.939-11.136-2.818-3.288-1.879-5.886-4.598-7.796-8.159-1.909-3.56-2.863-7.871-2.863-12.932 0-5.075.954-9.394 2.863-12.954 1.91-3.56 4.508-6.273 7.796-8.137 3.288-1.878 7-2.818 11.136-2.818 4.106 0 7.803.94 11.091 2.818 3.303 1.864 5.909 4.576 7.818 8.137 1.925 3.56 2.887 7.878 2.887 12.954zm-9.978 0c0-3.289-.492-6.061-1.477-8.319-.97-2.258-2.341-3.97-4.113-5.136-1.773-1.167-3.849-1.75-6.228-1.75-2.379 0-4.454.583-6.227 1.75-1.773 1.166-3.152 2.878-4.136 5.136-.97 2.258-1.455 5.03-1.455 8.318 0 3.288.485 6.06 1.455 8.319.984 2.257 2.363 3.97 4.136 5.136 1.773 1.166 3.848 1.75 6.227 1.75 2.379 0 4.455-.584 6.228-1.75 1.772-1.167 3.143-2.879 4.113-5.137.985-2.257 1.477-5.03 1.477-8.318zM494.608 67V20.454h30.818v8.114h-20.977V39.66h18.932v8.114h-18.932V67h-9.841zm37.437 0V20.454h31.364v8.114h-21.523V39.66h19.909v8.114h-19.909v11.113H563.5V67h-31.455zm55.688 0h-16.5V20.454h16.636c4.682 0 8.712.932 12.091 2.796 3.379 1.849 5.978 4.508 7.796 7.977 1.833 3.47 2.75 7.622 2.75 12.455 0 4.848-.917 9.015-2.75 12.5-1.818 3.485-4.432 6.159-7.841 8.022C596.521 66.069 592.46 67 587.733 67zm-6.659-8.432h6.25c2.909 0 5.356-.515 7.341-1.545 2-1.046 3.5-2.66 4.5-4.841 1.015-2.197 1.523-5.03 1.523-8.5 0-3.44-.508-6.25-1.523-8.432-1-2.182-2.493-3.788-4.477-4.818-1.985-1.03-4.432-1.546-7.341-1.546h-6.273v29.682zM617.795 67V20.454h31.364v8.114h-21.523V39.66h19.909v8.114h-19.909v11.113h21.614V67h-31.455zm39.188 0V20.454h18.364c3.515 0 6.515.63 9 1.887 2.5 1.242 4.401 3.008 5.704 5.295 1.318 2.273 1.977 4.947 1.977 8.023 0 3.091-.666 5.75-2 7.977-1.333 2.212-3.265 3.91-5.795 5.091-2.515 1.182-5.561 1.773-9.136 1.773h-12.296v-7.91h10.705c1.878 0 3.439-.257 4.682-.772 1.242-.515 2.166-1.288 2.772-2.318.621-1.03.932-2.31.932-3.84 0-1.546-.311-2.85-.932-3.91-.606-1.06-1.538-1.864-2.795-2.41-1.243-.56-2.811-.84-4.705-.84h-6.636V67h-9.841zm25.136-21.182L693.688 67h-10.864l-11.318-21.182h10.613zM707.006 67H696.46l16.068-46.546h12.682L741.256 67H730.71l-11.659-35.91h-.363L707.006 67zm-.659-18.295h24.909v7.681h-24.909v-7.681zM746.858 67V20.454h9.841v38.432h19.954V67h-29.795zM132.227 121V86.09h11.796c2.738 0 4.977.495 6.716 1.484 1.75.977 3.045 2.301 3.886 3.972.841 1.67 1.261 3.533 1.261 5.59s-.42 3.926-1.261 5.608c-.83 1.682-2.114 3.023-3.852 4.023-1.739.989-3.966 1.483-6.682 1.483h-8.455v-3.75h8.319c1.875 0 3.38-.324 4.517-.972 1.136-.647 1.96-1.522 2.471-2.625.523-1.113.784-2.369.784-3.767 0-1.397-.261-2.647-.784-3.75-.511-1.102-1.341-1.965-2.488-2.59-1.148-.637-2.671-.955-4.569-.955h-7.431V121h-4.228zm40.279.545c-2.364 0-4.438-.562-6.222-1.687-1.773-1.125-3.159-2.699-4.159-4.722-.989-2.022-1.483-4.386-1.483-7.091 0-2.727.494-5.108 1.483-7.142 1-2.034 2.386-3.613 4.159-4.738 1.784-1.125 3.858-1.688 6.222-1.688 2.363 0 4.432.563 6.204 1.688 1.784 1.125 3.171 2.704 4.159 4.738 1 2.034 1.5 4.415 1.5 7.142 0 2.705-.5 5.069-1.5 7.091-.988 2.023-2.375 3.597-4.159 4.722-1.772 1.125-3.841 1.687-6.204 1.687zm0-3.613c1.795 0 3.272-.46 4.432-1.381 1.159-.92 2.017-2.131 2.573-3.631.557-1.5.836-3.125.836-4.875s-.279-3.38-.836-4.892c-.556-1.511-1.414-2.733-2.573-3.664-1.16-.932-2.637-1.398-4.432-1.398-1.796 0-3.273.466-4.432 1.398-1.159.931-2.017 2.153-2.574 3.664-.557 1.512-.835 3.142-.835 4.892 0 1.75.278 3.375.835 4.875.557 1.5 1.415 2.711 2.574 3.631 1.159.921 2.636 1.381 4.432 1.381zM190.51 121V94.818h3.886v3.955h.273c.477-1.296 1.341-2.347 2.591-3.154 1.25-.806 2.659-1.21 4.227-1.21.296 0 .665.006 1.108.017.443.011.779.028 1.006.051v4.091a12 12 0 00-.938-.153 9.218 9.218 0 00-1.517-.12c-1.272 0-2.409.267-3.409.802a6.048 6.048 0 00-2.352 2.181c-.568.921-.852 1.972-.852 3.154V121h-4.023zm30.886-26.182v3.41h-13.568v-3.41h13.568zm-9.613-6.272h4.022V113.5c0 1.136.165 1.989.495 2.557.341.557.772.932 1.295 1.125a5.198 5.198 0 001.688.273c.443 0 .806-.023 1.091-.069l.681-.136.819 3.614a8.239 8.239 0 01-1.142.306c-.489.114-1.108.171-1.858.171a8.09 8.09 0 01-3.341-.733 6.64 6.64 0 01-2.694-2.233c-.704-1-1.056-2.261-1.056-3.784V88.546zm23.369 33.068c-1.659 0-3.165-.313-4.517-.938-1.352-.636-2.426-1.551-3.222-2.744-.795-1.205-1.193-2.659-1.193-4.364 0-1.5.296-2.716.887-3.648a6.245 6.245 0 012.369-2.215 12.426 12.426 0 013.273-1.194 40.001 40.001 0 013.63-.647 166.03 166.03 0 013.87-.461c1-.113 1.727-.301 2.181-.562.466-.261.699-.716.699-1.364v-.136c0-1.682-.46-2.989-1.38-3.92-.91-.932-2.29-1.398-4.142-1.398-1.921 0-3.427.42-4.518 1.261-1.09.841-1.857 1.739-2.301 2.693l-3.818-1.363c.682-1.591 1.591-2.83 2.727-3.716a10.226 10.226 0 013.75-1.875 15.576 15.576 0 014.023-.546c.841 0 1.807.102 2.898.307a9.269 9.269 0 013.187 1.21c1.034.614 1.892 1.54 2.574 2.779.682 1.238 1.023 2.897 1.023 4.977V121h-4.023v-3.545h-.204c-.273.568-.728 1.176-1.364 1.823-.636.648-1.483 1.199-2.54 1.654-1.057.454-2.346.682-3.869.682zm.614-3.614c1.591 0 2.931-.312 4.022-.938 1.103-.624 1.932-1.431 2.489-2.42.568-.989.852-2.028.852-3.119v-3.682c-.17.204-.545.392-1.125.562-.568.159-1.227.302-1.977.427-.739.113-1.46.215-2.165.306-.693.08-1.255.148-1.687.205a15.317 15.317 0 00-2.932.665c-.898.295-1.625.744-2.182 1.346-.545.591-.818 1.398-.818 2.421 0 1.397.517 2.454 1.551 3.17 1.045.705 2.369 1.057 3.972 1.057zm22.751-31.91V121h-4.023V86.09h4.023zm30.754 35.455c-2.182 0-4.108-.551-5.778-1.653-1.671-1.114-2.977-2.682-3.921-4.704-.943-2.035-1.414-4.438-1.414-7.211 0-2.75.471-5.136 1.414-7.159.944-2.022 2.256-3.585 3.938-4.687 1.682-1.103 3.625-1.654 5.829-1.654 1.705 0 3.052.284 4.04.852 1 .557 1.762 1.194 2.284 1.91.534.704.949 1.284 1.245 1.738h.341V86.091h4.022V121h-3.886v-4.023h-.477c-.296.478-.716 1.08-1.262 1.807-.545.716-1.324 1.358-2.335 1.926-1.011.557-2.358.835-4.04.835zm.546-3.613c1.613 0 2.977-.421 4.091-1.262 1.113-.852 1.96-2.028 2.539-3.528.58-1.511.87-3.256.87-5.233 0-1.954-.284-3.665-.853-5.131-.568-1.477-1.409-2.625-2.522-3.443-1.114-.83-2.489-1.244-4.125-1.244-1.705 0-3.125.437-4.262 1.312-1.125.864-1.971 2.04-2.539 3.529-.557 1.477-.836 3.136-.836 4.977 0 1.864.284 3.557.853 5.08.579 1.511 1.431 2.716 2.556 3.613 1.137.887 2.546 1.33 4.228 1.33zm30.017 3.613c-2.364 0-4.438-.562-6.222-1.687-1.773-1.125-3.159-2.699-4.159-4.722-.989-2.022-1.483-4.386-1.483-7.091 0-2.727.494-5.108 1.483-7.142 1-2.034 2.386-3.613 4.159-4.738 1.784-1.125 3.858-1.688 6.222-1.688 2.363 0 4.432.563 6.204 1.688 1.784 1.125 3.171 2.704 4.159 4.738 1 2.034 1.5 4.415 1.5 7.142 0 2.705-.5 5.069-1.5 7.091-.988 2.023-2.375 3.597-4.159 4.722-1.772 1.125-3.841 1.687-6.204 1.687zm0-3.613c1.795 0 3.273-.46 4.432-1.381 1.159-.92 2.017-2.131 2.573-3.631.557-1.5.836-3.125.836-4.875s-.279-3.38-.836-4.892c-.556-1.511-1.414-2.733-2.573-3.664-1.159-.932-2.637-1.398-4.432-1.398-1.796 0-3.273.466-4.432 1.398-1.159.931-2.017 2.153-2.574 3.664-.557 1.512-.835 3.142-.835 4.892 0 1.75.278 3.375.835 4.875.557 1.5 1.415 2.711 2.574 3.631 1.159.921 2.636 1.381 4.432 1.381zm32.05 3.068V86.09h11.795c2.727 0 4.966.467 6.716 1.399 1.75.92 3.045 2.187 3.886 3.8.841 1.614 1.262 3.45 1.262 5.507 0 2.056-.421 3.88-1.262 5.471-.841 1.591-2.13 2.841-3.869 3.75-1.739.898-3.96 1.347-6.665 1.347h-9.545v-3.819h9.409c1.863 0 3.363-.272 4.5-.818 1.148-.545 1.977-1.318 2.488-2.318.523-1.011.785-2.216.785-3.614 0-1.397-.262-2.619-.785-3.664-.522-1.046-1.358-1.853-2.505-2.42-1.148-.58-2.665-.87-4.551-.87h-7.432V121h-4.227zm16.431-15.682L376.906 121h-4.909l-8.454-15.682h4.772zm24.422 16.227c-2.523 0-4.699-.556-6.528-1.67-1.818-1.125-3.222-2.693-4.21-4.705-.978-2.022-1.466-4.375-1.466-7.056 0-2.682.488-5.046 1.466-7.091.988-2.057 2.363-3.66 4.125-4.807 1.772-1.16 3.84-1.739 6.204-1.739 1.364 0 2.71.227 4.04.682 1.329.455 2.54 1.193 3.631 2.216 1.09 1.011 1.96 2.352 2.608 4.023.647 1.67.971 3.727.971 6.17v1.705h-20.182v-3.478h16.091c0-1.477-.295-2.795-.886-3.954a6.68 6.68 0 00-2.489-2.744c-1.068-.67-2.329-1.006-3.784-1.006-1.602 0-2.989.398-4.159 1.193a7.85 7.85 0 00-2.676 3.068 9.017 9.017 0 00-.938 4.057v2.318c0 1.978.341 3.654 1.023 5.029.693 1.363 1.654 2.403 2.881 3.119 1.227.705 2.653 1.057 4.278 1.057 1.057 0 2.012-.148 2.864-.443a6.142 6.142 0 002.233-1.364c.625-.614 1.108-1.375 1.449-2.284l3.886 1.091a8.625 8.625 0 01-2.062 3.477c-.966.989-2.16 1.761-3.58 2.318-1.42.546-3.017.818-4.79.818zm16.96 9.273v-36h3.887v4.16h.477c.296-.455.705-1.035 1.227-1.74.534-.715 1.296-1.352 2.284-1.909 1-.568 2.353-.852 4.057-.852 2.205 0 4.148.551 5.83 1.654 1.682 1.102 2.994 2.665 3.937 4.687.943 2.023 1.415 4.409 1.415 7.159 0 2.773-.472 5.176-1.415 7.211-.943 2.022-2.25 3.59-3.92 4.704-1.671 1.102-3.597 1.653-5.779 1.653-1.681 0-3.028-.278-4.039-.835-1.012-.568-1.79-1.21-2.336-1.926a25.878 25.878 0 01-1.261-1.807h-.341v13.841h-4.023zm3.955-22.909c0 1.977.29 3.722.869 5.233.58 1.5 1.426 2.676 2.54 3.528 1.114.841 2.477 1.262 4.091 1.262 1.682 0 3.085-.443 4.21-1.33 1.137-.897 1.989-2.102 2.557-3.613.58-1.523.869-3.216.869-5.08 0-1.841-.284-3.5-.852-4.977-.557-1.489-1.403-2.665-2.54-3.529-1.125-.875-2.539-1.312-4.244-1.312-1.636 0-3.011.415-4.125 1.244-1.114.818-1.955 1.966-2.523 3.443-.568 1.466-.852 3.177-.852 5.131zM438.947 121V94.818h3.887v3.955h.273c.477-1.296 1.34-2.347 2.59-3.154 1.25-.806 2.66-1.21 4.228-1.21.295 0 .664.006 1.108.017.443.011.778.028 1.005.051v4.091a11.942 11.942 0 00-.937-.153 9.218 9.218 0 00-1.517-.12c-1.273 0-2.409.267-3.409.802a6.05 6.05 0 00-2.353 2.181c-.568.921-.852 1.972-.852 3.154V121h-4.023zm28.04.545c-2.523 0-4.699-.556-6.528-1.67-1.818-1.125-3.222-2.693-4.21-4.705-.978-2.022-1.466-4.375-1.466-7.056 0-2.682.488-5.046 1.466-7.091.988-2.057 2.363-3.66 4.125-4.807 1.772-1.16 3.84-1.739 6.204-1.739 1.364 0 2.71.227 4.04.682 1.329.455 2.54 1.193 3.631 2.216 1.09 1.011 1.96 2.352 2.608 4.023.647 1.67.971 3.727.971 6.17v1.705h-20.182v-3.478h16.091c0-1.477-.295-2.795-.886-3.954a6.68 6.68 0 00-2.489-2.744c-1.068-.67-2.329-1.006-3.784-1.006-1.602 0-2.989.398-4.159 1.193a7.85 7.85 0 00-2.676 3.068 9.017 9.017 0 00-.938 4.057v2.318c0 1.978.341 3.654 1.023 5.029.693 1.363 1.654 2.403 2.881 3.119 1.227.705 2.653 1.057 4.278 1.057 1.057 0 2.012-.148 2.864-.443a6.142 6.142 0 002.233-1.364c.625-.614 1.108-1.375 1.449-2.284l3.886 1.091a8.625 8.625 0 01-2.062 3.477c-.966.989-2.16 1.761-3.58 2.318-1.42.546-3.017.818-4.79.818zm35.506-20.863l-3.614 1.023a6.696 6.696 0 00-1.005-1.756c-.432-.58-1.023-1.057-1.773-1.432s-1.71-.563-2.881-.563c-1.602 0-2.937.37-4.006 1.109-1.056.727-1.585 1.653-1.585 2.778 0 1 .364 1.79 1.091 2.369.727.58 1.864 1.063 3.409 1.449l3.887.955c2.341.568 4.085 1.437 5.233 2.608 1.147 1.159 1.721 2.653 1.721 4.483 0 1.5-.432 2.84-1.295 4.022-.853 1.182-2.046 2.114-3.58 2.796-1.534.682-3.318 1.022-5.352 1.022-2.671 0-4.881-.579-6.631-1.738s-2.858-2.852-3.324-5.08l3.819-.954c.363 1.409 1.051 2.466 2.062 3.17 1.023.705 2.358 1.057 4.006 1.057 1.875 0 3.363-.398 4.466-1.193 1.113-.807 1.67-1.773 1.67-2.898 0-.909-.318-1.67-.954-2.284-.637-.625-1.614-1.091-2.932-1.398l-4.364-1.022c-2.398-.569-4.159-1.449-5.284-2.643-1.114-1.204-1.67-2.71-1.67-4.517 0-1.477.414-2.784 1.244-3.92.841-1.136 1.983-2.028 3.426-2.676 1.455-.648 3.102-.972 4.943-.972 2.591 0 4.625.569 6.102 1.705 1.489 1.136 2.546 2.636 3.171 4.5zm17.51 20.863c-2.523 0-4.699-.556-6.529-1.67-1.818-1.125-3.221-2.693-4.21-4.705-.977-2.022-1.466-4.375-1.466-7.056 0-2.682.489-5.046 1.466-7.091.989-2.057 2.364-3.66 4.125-4.807 1.773-1.16 3.841-1.739 6.205-1.739 1.363 0 2.71.227 4.04.682 1.329.455 2.539 1.193 3.63 2.216 1.091 1.011 1.96 2.352 2.608 4.023.648 1.67.972 3.727.972 6.17v1.705h-20.182v-3.478h16.091c0-1.477-.296-2.795-.887-3.954a6.678 6.678 0 00-2.488-2.744c-1.068-.67-2.33-1.006-3.784-1.006-1.603 0-2.989.398-4.159 1.193a7.85 7.85 0 00-2.676 3.068 9.017 9.017 0 00-.938 4.057v2.318c0 1.978.341 3.654 1.023 5.029.693 1.363 1.653 2.403 2.88 3.119 1.228.705 2.654 1.057 4.279 1.057 1.057 0 2.011-.148 2.863-.443a6.134 6.134 0 002.233-1.364c.625-.614 1.108-1.375 1.449-2.284l3.887 1.091a8.616 8.616 0 01-2.063 3.477c-.966.989-2.159 1.761-3.579 2.318-1.421.546-3.017.818-4.79.818zm20.983-16.295V121h-4.023V94.818h3.886v4.091h.341a7.48 7.48 0 012.796-3.205c1.25-.818 2.863-1.227 4.841-1.227 1.772 0 3.324.364 4.653 1.091 1.33.716 2.364 1.807 3.102 3.273.739 1.454 1.108 3.295 1.108 5.523V121h-4.022v-16.364c0-2.056-.534-3.659-1.603-4.806-1.068-1.16-2.534-1.74-4.397-1.74-1.284 0-2.432.28-3.444.836-1 .557-1.789 1.369-2.369 2.438-.579 1.068-.869 2.363-.869 3.886zm35.442-10.432v3.41h-13.569v-3.41h13.569zm-9.614-6.272h4.023V113.5c0 1.136.164 1.989.494 2.557.341.557.773.932 1.295 1.125a5.202 5.202 0 001.688.273 7.05 7.05 0 001.091-.069l.682-.136.818 3.614a8.239 8.239 0 01-1.142.306c-.489.114-1.108.171-1.858.171a8.09 8.09 0 01-3.341-.733c-1.08-.489-1.977-1.233-2.693-2.233-.705-1-1.057-2.261-1.057-3.784V88.546zm23.369 33.068c-1.659 0-3.165-.313-4.517-.938-1.352-.636-2.426-1.551-3.221-2.744-.796-1.205-1.194-2.659-1.194-4.364 0-1.5.296-2.716.887-3.648a6.252 6.252 0 012.369-2.215c.989-.535 2.08-.932 3.273-1.194a40.022 40.022 0 013.631-.647c1.59-.205 2.88-.358 3.869-.461 1-.113 1.727-.301 2.182-.562.466-.261.699-.716.699-1.364v-.136c0-1.682-.461-2.989-1.381-3.92-.909-.932-2.29-1.398-4.142-1.398-1.921 0-3.426.42-4.517 1.261-1.091.841-1.858 1.739-2.301 2.693l-3.819-1.363c.682-1.591 1.591-2.83 2.728-3.716a10.21 10.21 0 013.75-1.875 15.563 15.563 0 014.022-.546c.841 0 1.807.102 2.898.307a9.282 9.282 0 013.188 1.21c1.034.614 1.892 1.54 2.574 2.779.681 1.238 1.022 2.897 1.022 4.977V121h-4.022v-3.545h-.205c-.273.568-.727 1.176-1.364 1.823-.636.648-1.483 1.199-2.539 1.654-1.057.454-2.347.682-3.87.682zm.614-3.614c1.591 0 2.932-.312 4.023-.938 1.102-.624 1.931-1.431 2.488-2.42.568-.989.853-2.028.853-3.119v-3.682c-.171.204-.546.392-1.125.562-.569.159-1.228.302-1.978.427a92.83 92.83 0 01-2.165.306c-.693.08-1.255.148-1.687.205a15.334 15.334 0 00-2.932.665c-.898.295-1.625.744-2.182 1.346-.545.591-.818 1.398-.818 2.421 0 1.397.517 2.454 1.551 3.17 1.046.705 2.37 1.057 3.972 1.057zm22.751-12.75V121h-4.022V94.818h3.886v4.091h.341a7.472 7.472 0 012.795-3.205c1.25-.818 2.864-1.227 4.841-1.227 1.773 0 3.324.364 4.654 1.091 1.329.716 2.363 1.807 3.102 3.273.739 1.454 1.108 3.295 1.108 5.523V121h-4.023v-16.364c0-2.056-.534-3.659-1.602-4.806-1.068-1.16-2.534-1.74-4.398-1.74-1.284 0-2.432.28-3.443.836-1 .557-1.79 1.369-2.369 2.438-.58 1.068-.87 2.363-.87 3.886zm35.442-10.432v3.41h-13.568v-3.41h13.568zm-9.614-6.272h4.023V113.5c0 1.136.165 1.989.494 2.557.341.557.773.932 1.296 1.125a5.196 5.196 0 001.687.273 7.04 7.04 0 001.091-.069l.682-.136.818 3.614a8.16 8.16 0 01-1.142.306c-.488.114-1.108.171-1.858.171a8.093 8.093 0 01-3.341-.733 6.643 6.643 0 01-2.693-2.233c-.704-1-1.057-2.261-1.057-3.784V88.546zm26.361 32.999c-2.523 0-4.699-.556-6.528-1.67-1.818-1.125-3.222-2.693-4.21-4.705-.978-2.022-1.466-4.375-1.466-7.056 0-2.682.488-5.046 1.466-7.091.988-2.057 2.363-3.66 4.125-4.807 1.772-1.16 3.84-1.739 6.204-1.739 1.364 0 2.71.227 4.04.682 1.329.455 2.54 1.193 3.631 2.216 1.09 1.011 1.96 2.352 2.608 4.023.647 1.67.971 3.727.971 6.17v1.705h-20.182v-3.478h16.091c0-1.477-.295-2.795-.886-3.954a6.68 6.68 0 00-2.489-2.744c-1.068-.67-2.329-1.006-3.784-1.006-1.602 0-2.989.398-4.159 1.193a7.85 7.85 0 00-2.676 3.068 9.017 9.017 0 00-.938 4.057v2.318c0 1.978.341 3.654 1.023 5.029.693 1.363 1.654 2.403 2.881 3.119 1.227.705 2.653 1.057 4.278 1.057 1.057 0 2.012-.148 2.864-.443a6.142 6.142 0 002.233-1.364c.625-.614 1.108-1.375 1.449-2.284l3.886 1.091a8.625 8.625 0 01-2.062 3.477c-.966.989-2.16 1.761-3.58 2.318-1.42.546-3.017.818-4.79.818z"
      ></path>
    </svg>
  )
}

export default Logo
