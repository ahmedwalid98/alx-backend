#!/usr/bin/env python3
"""Basic caching module.
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    class fifo cahce
    """

    def __init__(self):
        super().__init__()

    def put(self, key, item):
        """add item"""
        if key is not None or item is not None:
            self.cache_data[key] = item
            if len(self.cache_data) > self.MAX_ITEMS:
                discarded_key = sorted(self.cache_data.keys())[0]
                del self.cache_data[discarded_key]
                print(f"DISCARD: {discarded_key}")

    def get(self, key):
        """get item"""
        return self.cache_data.get(key, None)
