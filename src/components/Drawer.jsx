function CustomDrawer({ isOpen, onClose, width, children }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white overflow-y-auto transition-transform transform ${
        isOpen ? 'translate-x-0' : `translate-x-500`
      }`}
      style={{
        width,
        transform: isOpen ? 'translateX(0)' : `translateX(${width}px)`,
      }}
    >
      <div className="flex justify-between p-4">
        <h2 className="text-lg font-semibold">Drawer Title</h2>
        <button
          onClick={onClose}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          关闭
        </button>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export default CustomDrawer;
