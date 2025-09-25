export default function ProductCard({
  product,
  layout = 'overlay',
  title,
  image,
  price,
  oldPrice,
  discount,
  rating,
}) {
  const item = product || { title, image, price, oldPrice, discount, rating };

  if (layout === 'row') {
    return (
      <div className="flex items-center bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition">
        <div className="w-20 h-20 flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-base font-semibold text-gray-900">
            {item.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-bold text-gray-900">
              {item.price}
            </span>
            {item.oldPrice && (
              <span className="text-xs line-through text-gray-400">
                {item.oldPrice}
              </span>
            )}
          </div>
          {item.rating && (
            <div className="text-yellow-500 text-sm mt-1">⭐ {item.rating}</div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg h-64 w-full rounded-lg group">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        {item.oldPrice && (
          <p className="line-through text-gray-300 text-sm">{item.oldPrice}</p>
        )}
        {item.discount && (
          <p className="text-red-400 font-bold text-sm">{item.discount}% Off</p>
        )}
        <p className="text-sky-400 font-bold text-lg">{item.price}</p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          ❤️
        </button>

        <button className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition">
          🛒
        </button>
      </div>
    </div>
  );
}
