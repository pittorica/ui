import React, {
  createContext,
  use,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import clsx from 'clsx';

interface MenuContextValue {
  activeIndex: number;
  setActiveIndex: (i: number) => void;
  closeAll: () => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

interface MenuContentProps {
  x: number;
  y: number;
  children: React.ReactNode;
  onClose: () => void;
  itemCount: number;
}

const MenuContent = ({
  x,
  y,
  children,
  onClose,
  itemCount,
}: MenuContentProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [localIndex, setLocalIndex] = useState(-1);
  const [adjustedPos, setAdjustedPos] = useState({ top: y, left: x });

  useLayoutEffect(() => {
    if (!menuRef.current) return;

    const { innerWidth: ww, innerHeight: wh } = globalThis;
    const { offsetWidth: mw, offsetHeight: mh } = menuRef.current;

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setAdjustedPos({
      left: x + mw > ww ? x - mw : x,
      top: y + mh > wh ? y - mh : y,
    });
  }, [x, y]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (itemCount === 0) return;

      switch (e.key) {
        case 'ArrowDown': {
          setLocalIndex((prev) => (prev + 1) % itemCount);
          break;
        }
        case 'ArrowUp': {
          setLocalIndex((prev) => (prev - 1 + itemCount) % itemCount);
          break;
        }
        case 'Escape': {
          onClose();
          break;
        }
      }
    };
    globalThis.addEventListener('keydown', handleKeyDown);
    globalThis.addEventListener('click', onClose);
    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
      globalThis.removeEventListener('click', onClose);
    };
  }, [itemCount, onClose]);

  const contextValue = useMemo(
    () => ({
      activeIndex: localIndex,
      setActiveIndex: setLocalIndex,
      closeAll: onClose,
    }),
    [localIndex, onClose]
  );

  return createPortal(
    <MenuContext value={contextValue}>
      <div
        ref={menuRef}
        className="pittorica-context-menu-content"
        style={{ top: adjustedPos.top, left: adjustedPos.left }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </MenuContext>,
    document.body
  );
};

export interface ContextMenuProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  itemCount: number;
}

export const ContextMenu = ({
  trigger,
  children,
  itemCount,
}: ContextMenuProps) => {
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);

  const closeAll = useCallback(() => {
    setCoords(null);
  }, []);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ display: 'inline-block' }}>
      {trigger}
      {coords && (
        <MenuContent
          x={coords.x}
          y={coords.y}
          onClose={closeAll}
          itemCount={itemCount}
        >
          {children}
        </MenuContent>
      )}
    </div>
  );
};

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClick?: () => void;
  index: number;
}

export const ContextMenuItem = ({
  children,
  onClick,
  index,
  className,
  style,
  ...props
}: ItemProps) => {
  const context = use(MenuContext);
  if (!context) return null;

  const isActive = context.activeIndex === index;

  return (
    <div
      {...props}
      className={clsx('pittorica-context-menu-item', className)}
      data-active={isActive}
      style={style}
      onMouseEnter={() => context.setActiveIndex(index)}
      onClick={() => {
        onClick?.();
        context.closeAll();
      }}
    >
      {children}
    </div>
  );
};

interface SubProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  children: React.ReactNode;
  index: number;
  itemCount: number;
}

export const ContextMenuSub = ({
  label,
  children,
  index,
  itemCount,
  className,
  style,
  ...props
}: SubProps) => {
  const context = use(MenuContext);
  const ref = useRef<HTMLDivElement>(null);
  if (!context) return null;

  const isActive = context.activeIndex === index;

  return (
    <div
      {...props}
      ref={ref}
      className={clsx('pittorica-context-menu-item', className)}
      data-active={isActive}
      style={style}
      onMouseEnter={() => context.setActiveIndex(index)}
    >
      {label}
      <span className="pittorica-context-menu-chevron">▶</span>
      {isActive && (
        <MenuContent
          x={ref.current?.getBoundingClientRect().right ?? 0}
          y={ref.current?.getBoundingClientRect().top ?? 0}
          onClose={context.closeAll}
          itemCount={itemCount}
        >
          {children}
        </MenuContent>
      )}
    </div>
  );
};
