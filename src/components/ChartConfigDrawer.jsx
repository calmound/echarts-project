import Drawer from './Drawer';

function ChartConfigDrawer({ isOpen, onClose, children }) {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      className="custom-drawer" // 添加自定义样式类名
      position="right"
    >
      <div className="p-4">
        {children}
        <button
          onClick={onClose}
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          关闭
        </button>
      </div>
    </Drawer>
  );
}

export default ChartConfigDrawer;
